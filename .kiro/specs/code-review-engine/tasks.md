# Implementation Plan

## Fase 1: Correções Críticas (P0)

- [x] 1. Corrigir Button Loading State com asChild
  - [x] 1.1 Modificar button.tsx para preservar loading state quando asChild=true
    - Usar Slottable do Radix para injetar conteúdo de loading
    - Adicionar aria-busy quando loading
    - Manter disabled state
    - _Requirements: 2.4_
  - [x] 1.2 Escrever property test para Button Loading State Preservation
    - **Property 2: Button Loading State Preservation**
    - **Validates: Requirements 2.4**
  - [x] 1.3 Escrever unit tests para novos comportamentos
    - Testar loading com asChild=true
    - Testar aria-busy attribute
    - _Requirements: 2.4_

- [x] 2. Corrigir FormField Type Safety
  - [x] 2.1 Adicionar validação de children em form-field.tsx
    - Usar React.isValidElement para validar
    - Lançar InvalidPropError quando inválido
    - Remover type assertion insegura
    - _Requirements: 5.2_
  - [x] 2.2 Escrever property test para FormField Props Injection
    - **Property 4: FormField Props Injection**
    - **Validates: Requirements 5.2**

- [x] 3. Reutilizar Ícones do Pacote Icons
  - [x] 3.1 Atualizar select.tsx para usar ChevronDownIcon e CheckIcon
    - Importar ícones de @pineapple-ui/icons
    - Substituir SVGs inline
    - Ajustar tamanho e classes
    - _Requirements: 4.1_
  - [x] 3.2 Atualizar toast.tsx para usar XIcon
    - Importar XIcon de @pineapple-ui/icons
    - Substituir SVG inline do botão de dismiss
    - _Requirements: 4.1_
  - [x] 3.3 Verificar que ícones são renderizados corretamente
    - Testar que ícones aparecem no DOM
    - Testar acessibilidade dos ícones
    - _Requirements: 4.1_

- [x] 4. Checkpoint - Garantir que todos os testes passam
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Implementar Single Source of Truth para Tokens
  - [x] 5.1 Atualizar exports em packages/tokens/src/index.ts
    - Exportar tema para uso no Tailwind
    - Manter backward compatibility
    - _Requirements: 12.2_
  - [x] 5.2 Refatorar tooling/tailwind-config/theme.js
    - Importar tokens de @pineapple-ui/tokens
    - Remover duplicação de valores
    - Converter formato se necessário
    - _Requirements: 12.2_
  - [x] 5.3 Escrever property test para Token Single Source of Truth
    - **Property 9: Token Single Source of Truth**
    - **Validates: Requirements 12.2**

- [x] 6. Usar Classes de Erro nos Componentes
  - [x] 6.1 Atualizar packages/utils/src/errors.ts
    - Adicionar ERROR_CODES como constantes
    - Adicionar suporte a cause para stack trace
    - _Requirements: 11.1_
  - [x] 6.2 Integrar erros em FormField
    - Usar InvalidPropError para children inválido
    - _Requirements: 11.2_
  - [x] 6.3 Escrever property test para Error Class Usage
    - **Property 7: Error Class Usage**
    - **Validates: Requirements 11.1, 11.2**

- [x] 7. Checkpoint - Garantir que todos os testes passam
  - Ensure all tests pass, ask the user if questions arise.

## Fase 2: Melhorias de Qualidade (P1)

- [x] 8. Extrair Estilos para Arquivos Separados
  - [x] 8.1 Criar alert.styles.ts
    - Mover alertVariants para arquivo separado
    - Exportar tipos de variantes
    - Atualizar imports em alert.tsx
    - _Requirements: 3.1_
  - [x] 8.2 Criar card.styles.ts
    - Mover cardVariants para arquivo separado
    - Substituir bg-white por token
    - _Requirements: 3.1, 3.2_
  - [x] 8.3 Criar toast.styles.ts
    - Mover toastVariants para arquivo separado
    - _Requirements: 3.1_
  - [x] 8.4 Criar flex.styles.ts
    - Mover flexVariants para arquivo separado
    - _Requirements: 3.1_
  - [x] 8.5 Criar select.styles.ts
    - Mover todas as variantes para arquivo separado
    - _Requirements: 3.1_
  - [x] 8.6 Escrever property test para Token Usage Consistency
    - **Property 3: Token Usage Consistency**
    - **Validates: Requirements 3.2**

- [x] 9. Adicionar Testes para Componentes sem Cobertura
  - [x] 9.1 Criar card.test.tsx
    - Testar variantes (elevated, outlined, filled)
    - Testar subcomponentes (Header, Title, Description, Content, Footer)
    - Testar ref forwarding
    - _Requirements: 7.1_
  - [x] 9.2 Criar dialog.test.tsx
    - Testar abertura e fechamento
    - Testar acessibilidade (focus trap, escape key)
    - Testar subcomponentes
    - _Requirements: 7.1_
  - [x] 9.3 Criar toast.test.tsx
    - Testar variantes de status
    - Testar auto-dismiss
    - Testar botão de dismiss
    - _Requirements: 7.1_
  - [x] 9.4 Criar table.test.tsx
    - Testar estrutura de tabela
    - Testar subcomponentes
    - _Requirements: 7.1_
  - [x] 9.5 Escrever property tests para ARIA Compliance
    - **Property 5: ARIA Compliance**
    - **Validates: Requirements 6.1, 6.2**
  - [x] 9.6 Escrever property test para Toast Role Based on Status
    - **Property 6: Toast Role Based on Status**
    - **Validates: Requirements 6.2**

- [x] 10. Checkpoint - Garantir que todos os testes passam
  - Ensure all tests pass, ask the user if questions arise.

- [x] 11. Criar CHANGELOG.md
  - [x] 11.1 Criar arquivo CHANGELOG.md na raiz
    - Seguir formato Keep a Changelog
    - Documentar versão atual (0.0.0)
    - Listar features implementadas
    - _Requirements: 10.4_

- [x] 12. Adicionar Property Tests para Componentes Existentes
  - [x] 12.1 Escrever property test para Component Contract Compliance
    - **Property 1: Component Contract Compliance**
    - **Validates: Requirements 2.1, 2.2**
    - Implementado em packages/core/src/contracts.test.tsx
    - Nota: 2 testes falhando por displayName inconsistente em Menu/Dropdown (wrapping Radix)
  - [x] 12.2 Escrever property test para Token Format Validity
    - **Property 8: Token Format Validity**
    - **Validates: Requirements 12.1**
    - Implementado em packages/tokens/src/theme.test.ts como "Color Format Validity"

## Fase 3: Melhorias de Arquitetura (P2)

- [x] 13. Criar Pacote de Hooks



  - [x] 13.1 Criar estrutura do pacote packages/hooks

    - Criar package.json
    - Criar tsconfig.json
    - Criar tsup.config.ts
    - _Requirements: 1.3_

  - [x] 13.2 Extrair hooks reutilizáveis

    - useId (se não usar React.useId)
    - useControllableState
    - useMediaQuery
    - _Requirements: 1.3_
  - [x] 13.3 Escrever testes para hooks



    - Testar comportamento de cada hook
    - _Requirements: 1.3_



- [x] 14. Criar Gerador de Scaffolding

  - [x] 14.1 Configurar plop ou hygen

    - Instalar dependência
    - Criar configuração base
    - _Requirements: 1.4_

  - [x] 14.2 Criar template de componente
    - Template para component.tsx
    - Template para component.styles.ts
    - Template para component.test.tsx
    - Template para index.ts
    - _Requirements: 1.4_


- [x] 15. Implementar Imports Diretos por Componente

  - Parcialmente implementado: apenas button tem import direto
  - [x] 15.1 Atualizar package.json exports

    - Adicionar exports para cada componente (input, checkbox, select, alert, card, dialog, toast, etc.)
    - Exemplo: "@pineapple-ui/core/input", "@pineapple-ui/core/select"
    - _Requirements: 8.2_

  - [x] 15.2 Atualizar tsup.config.ts

    - Adicionar entry points para todos os componentes
    - _Requirements: 8.2_

- [x] 16. Corrigir displayName inconsistente em Menu/Dropdown




  - [x] 16.1 Atualizar Menu components para ter displayName consistente

    - MenuTrigger deve ter displayName 'MenuTrigger' (não 'DropdownMenuTrigger')
    - _Requirements: 2.2_

  - [x] 16.2 Atualizar Dropdown components para ter displayName consistente
    - DropdownItem deve ter displayName 'DropdownItem' (não 'MenuItem')
    - _Requirements: 2.2_


- [x] 17. Final Checkpoint - Garantir que todos os testes passam


  - Ensure all tests pass, ask the user if questions arise.
