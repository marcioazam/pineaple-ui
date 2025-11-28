# Requirements Document

## Introduction

Este documento apresenta uma análise profunda de code review do projeto **Pineapple UI**, uma biblioteca de componentes React moderna, acessível e altamente customizável. A análise identifica pontos de melhoria em arquitetura, padrões de código, segurança, performance, acessibilidade e manutenibilidade, seguindo as melhores práticas da indústria.

## Glossary

- **CVA (Class Variance Authority)**: Biblioteca para gerenciar variantes de classes CSS de forma type-safe
- **Design Tokens**: Variáveis que armazenam valores de design como cores, espaçamentos, tipografia
- **oklch**: Espaço de cor perceptualmente uniforme usado para manipulação de cores
- **Headless Components**: Componentes sem estilo que fornecem apenas comportamento e acessibilidade
- **Property-Based Testing (PBT)**: Técnica de teste que verifica propriedades universais com inputs aleatórios
- **WCAG**: Web Content Accessibility Guidelines - diretrizes de acessibilidade web
- **DRY**: Don't Repeat Yourself - princípio de não repetir código
- **SOLID**: Princípios de design orientado a objetos (Single Responsibility, Open/Closed, etc.)

---

## Análise de Arquitetura

### Requirement 1: Estrutura de Monorepo

**User Story:** Como desenvolvedor, quero uma estrutura de monorepo bem organizada, para que eu possa navegar e manter o código facilmente.

#### Acceptance Criteria

1. ✅ **APROVADO**: A estrutura de pacotes está bem organizada com separação clara de responsabilidades (`core`, `primitives`, `tokens`, `icons`, `utils`)
2. ✅ **APROVADO**: O uso de Turborepo com cache inteligente otimiza builds
3. ⚠️ **MELHORIA**: WHEN o projeto cresce THEN o sistema SHOULD ter um pacote `@pineapple-ui/hooks` separado para hooks reutilizáveis
4. ⚠️ **MELHORIA**: WHEN componentes são criados THEN o sistema SHOULD ter um gerador de scaffolding (plop/hygen) para padronizar estrutura

---

## Análise de Componentes Core

### Requirement 2: Padrões de Componentes

**User Story:** Como desenvolvedor, quero componentes consistentes e bem estruturados, para que eu possa entender e estender facilmente.

#### Acceptance Criteria

1. ✅ **APROVADO**: Todos os componentes usam `forwardRef` corretamente
2. ✅ **APROVADO**: Todos os componentes têm `displayName` definido
3. ⚠️ **MELHORIA**: WHEN um componente é criado THEN o componente SHOULD exportar seus tipos de props separadamente para facilitar extensão
4. ❌ **CRÍTICO**: WHEN o Button está em estado `loading` com `asChild=true` THEN o sistema SHALL manter o comportamento de loading (atualmente ignorado)

**Código Problemático (button.tsx:63-72):**
```typescript
// Quando asChild é true, o loading state é ignorado
if (asChild) {
  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
```

---

### Requirement 3: Consistência de Estilos

**User Story:** Como desenvolvedor, quero estilos consistentes entre componentes, para que a UI seja coesa.

#### Acceptance Criteria

1. ⚠️ **MELHORIA**: WHEN estilos são definidos THEN o sistema SHOULD extrair estilos para arquivos `.styles.ts` separados (Card, Alert, Toast não seguem este padrão)
2. ⚠️ **MELHORIA**: WHEN variantes são definidas THEN o sistema SHOULD usar constantes para valores repetidos de cores e espaçamentos
3. ❌ **INCONSISTÊNCIA**: WHEN cores são usadas THEN o sistema SHALL usar tokens consistentes (Card usa `bg-white` hardcoded ao invés de token)

**Componentes sem arquivo de estilos separado:**
- `alert.tsx` - define `alertVariants` inline
- `card.tsx` - define `cardVariants` inline
- `toast.tsx` - define `toastVariants` inline
- `flex.tsx` - define `flexVariants` inline
- `select.tsx` - define múltiplas variantes inline

---

### Requirement 4: Duplicação de Código

**User Story:** Como desenvolvedor, quero código DRY, para que manutenção seja mais fácil.

#### Acceptance Criteria

1. ❌ **CRÍTICO**: WHEN ícones SVG são usados THEN o sistema SHALL reutilizar componentes de ícones existentes

**Duplicação encontrada:**
- `select.tsx:73-82` - SVG chevron duplicado (deveria usar `ChevronDownIcon`)
- `select.tsx:130-140` - SVG check duplicado (deveria usar `CheckIcon`)
- `toast.tsx:68-70` - SVG X duplicado (deveria usar `XIcon`)

2. ⚠️ **MELHORIA**: WHEN subcomponentes são criados THEN o sistema SHOULD usar factory pattern para reduzir boilerplate

**Padrão repetitivo em Card, Alert, Toast, Table:**
```typescript
export const ComponentTitle = React.forwardRef<...>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn('...', className)} {...props} />
));
ComponentTitle.displayName = 'ComponentTitle';
```

---

## Análise de Tipagem

### Requirement 5: Type Safety

**User Story:** Como desenvolvedor, quero tipagem forte e completa, para que erros sejam detectados em tempo de compilação.

#### Acceptance Criteria

1. ✅ **APROVADO**: TypeScript strict mode está habilitado
2. ⚠️ **MELHORIA**: WHEN props são definidas THEN o sistema SHOULD usar tipos mais específicos ao invés de `React.ReactNode` genérico
3. ❌ **CRÍTICO**: WHEN FormField clona children THEN o sistema SHALL tipar corretamente as props injetadas

**Código Problemático (form-field.tsx:47-51):**
```typescript
// Type assertion sem validação
const childWithProps = React.cloneElement(children, {
  ...
} as React.Attributes & Record<string, unknown>);
```

4. ⚠️ **MELHORIA**: WHEN interfaces são exportadas THEN o sistema SHOULD usar `interface` para props e `type` para unions/intersections consistentemente

---

## Análise de Acessibilidade

### Requirement 6: WCAG Compliance

**User Story:** Como usuário com deficiência, quero componentes acessíveis, para que eu possa usar a aplicação.

#### Acceptance Criteria

1. ✅ **APROVADO**: Componentes usam roles ARIA apropriados
2. ✅ **APROVADO**: Alert usa `role="alert"`
3. ⚠️ **MELHORIA**: WHEN Toast é exibido THEN o sistema SHOULD usar `role="alert"` para mensagens de erro (atualmente usa `role="status"` para todos)
4. ⚠️ **MELHORIA**: WHEN ícones são decorativos THEN o sistema SHOULD garantir `aria-hidden="true"` (já implementado, mas inconsistente)
5. ❌ **CRÍTICO**: WHEN Dialog é fechado THEN o sistema SHALL retornar foco ao elemento que o abriu (depende do Radix, mas não há documentação)

---

## Análise de Testes

### Requirement 7: Cobertura de Testes

**User Story:** Como desenvolvedor, quero testes abrangentes, para que eu tenha confiança nas mudanças.

#### Acceptance Criteria

1. ✅ **APROVADO**: Property-based testing implementado com fast-check
2. ✅ **APROVADO**: Testes de acessibilidade com jest-axe
3. ⚠️ **MELHORIA**: WHEN componentes são criados THEN o sistema SHOULD ter testes para todos os componentes

**Componentes sem testes:**
- `card.tsx`
- `dialog.tsx`
- `toast.tsx`
- `table.tsx`
- `avatar.tsx`
- `badge.tsx`
- `breadcrumb.tsx`
- `dropdown.tsx`
- `menu.tsx`
- `container.tsx`
- `grid.tsx`
- `stack.tsx`
- `tabs.tsx`
- `textarea.tsx`
- `switch.tsx`
- `tooltip.tsx`

4. ⚠️ **MELHORIA**: WHEN testes são escritos THEN o sistema SHOULD ter testes de integração entre componentes

---

## Análise de Performance

### Requirement 8: Otimização de Bundle

**User Story:** Como desenvolvedor, quero bundles otimizados, para que a aplicação seja rápida.

#### Acceptance Criteria

1. ✅ **APROVADO**: Tree-shaking habilitado via exports granulares
2. ⚠️ **MELHORIA**: WHEN componentes são importados THEN o sistema SHOULD suportar imports diretos (`@pineapple-ui/core/button`)
3. ⚠️ **MELHORIA**: WHEN SVGs são usados THEN o sistema SHOULD considerar sprites ou lazy loading para ícones grandes

---

## Análise de Segurança

### Requirement 9: Práticas de Segurança

**User Story:** Como desenvolvedor, quero código seguro, para que a aplicação não tenha vulnerabilidades.

#### Acceptance Criteria

1. ✅ **APROVADO**: Não há uso de `dangerouslySetInnerHTML`
2. ✅ **APROVADO**: Não há uso de `eval` ou `Function`
3. ⚠️ **MELHORIA**: WHEN props são passadas THEN o sistema SHOULD sanitizar URLs em componentes como Avatar
4. ⚠️ **MELHORIA**: WHEN dependências são usadas THEN o sistema SHOULD ter audit automatizado no CI

---

## Análise de Documentação

### Requirement 10: Documentação de Código

**User Story:** Como desenvolvedor, quero documentação clara, para que eu entenda como usar os componentes.

#### Acceptance Criteria

1. ✅ **APROVADO**: JSDoc presente nos componentes principais
2. ⚠️ **MELHORIA**: WHEN funções utilitárias são criadas THEN o sistema SHOULD documentar parâmetros e retornos
3. ⚠️ **MELHORIA**: WHEN tipos são exportados THEN o sistema SHOULD ter documentação TSDoc
4. ❌ **FALTANDO**: WHEN o projeto é usado THEN o sistema SHALL ter CHANGELOG.md

---

## Análise de Error Handling

### Requirement 11: Tratamento de Erros

**User Story:** Como desenvolvedor, quero erros claros e informativos, para que eu possa debugar facilmente.

#### Acceptance Criteria

1. ✅ **APROVADO**: Classes de erro customizadas definidas em `errors.ts`
2. ❌ **CRÍTICO**: WHEN erros são definidos THEN o sistema SHALL usar as classes de erro nos componentes (atualmente não são usadas)
3. ⚠️ **MELHORIA**: WHEN props inválidas são passadas THEN o sistema SHOULD validar e lançar `InvalidPropError`

---

## Análise de Tokens

### Requirement 12: Sistema de Design Tokens

**User Story:** Como designer, quero tokens consistentes, para que o design seja coeso.

#### Acceptance Criteria

1. ✅ **APROVADO**: Tokens bem estruturados com tipagem forte
2. ✅ **APROVADO**: Uso de oklch para cores perceptualmente uniformes
3. ⚠️ **MELHORIA**: WHEN tokens são definidos THEN o sistema SHOULD ter validação de contraste WCAG
4. ❌ **DUPLICAÇÃO**: WHEN tokens são definidos THEN o sistema SHALL ter single source of truth (duplicado em `theme.ts` e `tailwind-config/theme.js`)

---

## Resumo de Prioridades

### P0 - Crítico (Corrigir Imediatamente)
1. Button loading state ignorado com asChild
2. FormField type assertion sem validação
3. Duplicação de SVGs inline
4. Classes de erro não utilizadas
5. Duplicação de tokens entre packages

### P1 - Alto (Próximo Sprint)
1. Extrair estilos para arquivos separados
2. Adicionar testes para componentes sem cobertura
3. Criar CHANGELOG.md
4. Usar ícones do pacote icons nos componentes

### P2 - Médio (Backlog)
1. Criar pacote de hooks
2. Adicionar gerador de scaffolding
3. Implementar imports diretos por componente
4. Adicionar validação de contraste WCAG

### P3 - Baixo (Nice to Have)
1. Melhorar documentação TSDoc
2. Adicionar testes de integração
3. Implementar lazy loading de ícones
