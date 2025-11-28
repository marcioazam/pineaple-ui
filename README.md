<p align="center">
  <img src="pineapple.png" alt="Pineapple UI Logo" width="200" />
</p>

<h1 align="center">🍍 Pineapple UI</h1>

<p align="center">
  <strong>Biblioteca de componentes React moderna, acessível e altamente customizável</strong>
</p>

<p align="center">
  <em>Construa interfaces bonitas e acessíveis com facilidade</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Licença-MIT-green?style=for-the-badge" alt="MIT License" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/WCAG-2.2_Compliant-blue?style=for-the-badge" alt="WCAG 2.2" />
  <img src="https://img.shields.io/badge/SSR-Ready-purple?style=for-the-badge" alt="SSR Ready" />
  <img src="https://img.shields.io/badge/Tree_Shaking-Enabled-orange?style=for-the-badge" alt="Tree Shaking" />
</p>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Por que Pineapple UI?](#-por-que-pineapple-ui)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Arquitetura do Projeto](#-arquitetura-do-projeto)
- [Instalação](#-instalação)
- [Início Rápido](#-início-rápido)
- [Componentes Disponíveis](#-componentes-disponíveis)
- [Sistema de Design Tokens](#-sistema-de-design-tokens)
- [Temas e Customização](#-temas-e-customização)
- [Acessibilidade](#-acessibilidade)
- [Desenvolvimento](#-desenvolvimento)
- [Testes](#-testes)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

**Pineapple UI** é uma biblioteca de componentes React de código aberto, projetada para ser a base de sistemas de design modernos em 2025. Nossa missão é fornecer componentes que sejam:

- **Acessíveis por padrão**: Todos os componentes seguem as diretrizes WCAG 2.2 e WAI-ARIA
- **Altamente customizáveis**: Sistema de design tokens permite adaptar a aparência para qualquer marca
- **Performáticos**: Otimizados para bundle size mínimo com tree-shaking completo
- **Type-safe**: Escritos em TypeScript com tipagem completa e IntelliSense

A biblioteca oferece dois tipos de componentes:

1. **Componentes Estilizados** (`@pineapple-ui/core`): Componentes prontos para uso com estilos baseados em design tokens
2. **Primitivos Headless** (`@pineapple-ui/primitives`): Componentes sem estilo que fornecem apenas comportamento e acessibilidade

---

## 💡 Por que Pineapple UI?

### Comparação com outras bibliotecas

| Característica | Pineapple UI | Material UI | Chakra UI | Radix UI |
|----------------|--------------|-------------|-----------|----------|
| React 19 | ✅ | ⚠️ | ⚠️ | ✅ |
| Tailwind CSS 4 | ✅ | ❌ | ❌ | ❌ |
| Componentes Headless | ✅ | ❌ | ❌ | ✅ |
| Componentes Estilizados | ✅ | ✅ | ✅ | ❌ |
| Design Tokens CSS | ✅ | ❌ | ✅ | ❌ |
| oklch Colors | ✅ | ❌ | ❌ | ❌ |
| Bundle < 10KB/componente | ✅ | ❌ | ⚠️ | ✅ |
| SSR sem hidratação | ✅ | ⚠️ | ✅ | ✅ |

### Principais Diferenciais

🎨 **Design Tokens Modernos**
- Utiliza CSS custom properties com a sintaxe `@theme` do Tailwind CSS 4
- Cores no espaço oklch para manipulação perceptualmente uniforme
- Escala de espaçamento consistente baseada em unidade de 4px

⚡ **Performance Otimizada**
- Tree-shaking completo - importe apenas o que usar
- Cada componente < 10KB gzipped
- Zero dependências de runtime desnecessárias

♿ **Acessibilidade de Primeira Classe**
- Baseado em Radix UI Primitives
- Navegação por teclado completa
- Suporte a leitores de tela
- Gerenciamento de foco automático

---

## 🛠 Tecnologias Utilizadas

O Pineapple UI é construído com as tecnologias mais modernas do ecossistema React:

### Core
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **React** | 19.x | Biblioteca para construção de interfaces |
| **TypeScript** | 5.7 | Superset tipado do JavaScript |
| **Tailwind CSS** | 4.0 | Framework CSS utility-first |
| **Radix UI** | Latest | Primitivos acessíveis headless |

### Build & Tooling
| Tecnologia | Descrição |
|------------|-----------|
| **Turborepo** | Build system para monorepos com cache inteligente |
| **pnpm** | Gerenciador de pacotes rápido e eficiente |
| **Vite** | Build tool e dev server ultrarrápido |
| **tsup** | Bundler TypeScript zero-config |

### Qualidade & Testes
| Tecnologia | Descrição |
|------------|-----------|
| **Vitest** | Framework de testes unitários |
| **Testing Library** | Utilitários para testes de componentes React |
| **axe-core** | Testes automatizados de acessibilidade |
| **fast-check** | Property-based testing |
| **ESLint** | Linter para JavaScript/TypeScript |
| **Prettier** | Formatador de código |

### Documentação
| Tecnologia | Descrição |
|------------|-----------|
| **Storybook** | Ambiente de desenvolvimento e documentação |
| **Changesets** | Versionamento e changelogs automatizados |

---

## 📁 Arquitetura do Projeto

O Pineapple UI utiliza uma arquitetura de **monorepo** gerenciada com pnpm workspaces e Turborepo:

```
pineapple-ui/
├── 📁 apps/
│   └── 📁 docs/                    # Storybook - Documentação interativa
│       ├── 📁 .storybook/          # Configuração do Storybook
│       ├── 📁 stories/             # Stories dos componentes
│       └── 📁 styles/              # Estilos globais
│
├── 📁 packages/
│   ├── 📁 core/                    # @pineapple-ui/core
│   │   └── 📁 src/
│   │       └── 📁 components/      # Componentes estilizados
│   │           ├── 📁 button/
│   │           ├── 📁 input/
│   │           ├── 📁 card/
│   │           └── ...
│   │
│   ├── 📁 primitives/              # @pineapple-ui/primitives
│   │   └── 📁 src/                 # Componentes headless (Radix)
│   │       ├── 📁 dialog/
│   │       ├── 📁 menu/
│   │       └── ...
│   │
│   ├── 📁 tokens/                  # @pineapple-ui/tokens
│   │   └── 📁 src/                 # Design tokens e temas
│   │       ├── theme.ts
│   │       └── dark-theme.ts
│   │
│   ├── 📁 icons/                   # @pineapple-ui/icons
│   │   └── 📁 src/                 # Ícones SVG como componentes
│   │
│   └── 📁 utils/                   # @pineapple-ui/utils
│       └── 📁 src/                 # Funções utilitárias
│
├── 📁 tooling/
│   ├── 📁 eslint-config/           # Configuração compartilhada ESLint
│   ├── 📁 tailwind-config/         # Configuração compartilhada Tailwind
│   └── 📁 tsconfig/                # Configuração compartilhada TypeScript
│
├── 📄 package.json                 # Configuração raiz do monorepo
├── 📄 pnpm-workspace.yaml          # Definição dos workspaces
├── 📄 turbo.json                   # Configuração do Turborepo
└── 📄 vitest.config.ts             # Configuração de testes
```

### Descrição dos Pacotes

| Pacote | npm | Descrição |
|--------|-----|-----------|
| `@pineapple-ui/core` | ![npm](https://img.shields.io/npm/v/@pineapple-ui/core?style=flat-square) | Componentes React estilizados prontos para uso |
| `@pineapple-ui/primitives` | ![npm](https://img.shields.io/npm/v/@pineapple-ui/primitives?style=flat-square) | Primitivos headless baseados em Radix UI |
| `@pineapple-ui/tokens` | ![npm](https://img.shields.io/npm/v/@pineapple-ui/tokens?style=flat-square) | Design tokens e sistema de temas |
| `@pineapple-ui/icons` | ![npm](https://img.shields.io/npm/v/@pineapple-ui/icons?style=flat-square) | Biblioteca de ícones SVG |
| `@pineapple-ui/utils` | ![npm](https://img.shields.io/npm/v/@pineapple-ui/utils?style=flat-square) | Funções utilitárias compartilhadas |

---

## 📦 Instalação

### Pré-requisitos

Antes de instalar o Pineapple UI, certifique-se de ter:

- **Node.js** >= 20.0.0
- **React** >= 18.0.0 (compatível com React 19)
- **Tailwind CSS** >= 4.0.0 (para componentes estilizados)

### Instalação dos Pacotes

Você pode instalar apenas os pacotes que precisa:

```bash
# Usando pnpm (recomendado)
pnpm add @pineapple-ui/core @pineapple-ui/tokens

# Usando npm
npm install @pineapple-ui/core @pineapple-ui/tokens

# Usando yarn
yarn add @pineapple-ui/core @pineapple-ui/tokens
```

### Instalação Completa

Para instalar todos os pacotes:

```bash
# pnpm
pnpm add @pineapple-ui/core @pineapple-ui/primitives @pineapple-ui/tokens @pineapple-ui/icons @pineapple-ui/utils

# npm
npm install @pineapple-ui/core @pineapple-ui/primitives @pineapple-ui/tokens @pineapple-ui/icons @pineapple-ui/utils
```

### Configuração do Tailwind CSS

Adicione o Pineapple UI ao seu `tailwind.config.js`:

```js
// tailwind.config.js
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@pineapple-ui/core/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Importação dos Estilos

Importe os estilos base no seu arquivo principal:

```tsx
// main.tsx ou App.tsx
import '@pineapple-ui/tokens/styles.css';
```

---

## 🚀 Início Rápido

### Exemplo Básico

```tsx
import { Button, Input, Card } from '@pineapple-ui/core';
import '@pineapple-ui/tokens/styles.css';

function App() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Bem-vindo ao Pineapple UI</Card.Title>
        <Card.Description>
          Comece a construir interfaces incríveis
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <Input 
          placeholder="Digite seu email" 
          type="email"
        />
        <Button variant="primary" size="md">
          Começar Agora
        </Button>
      </Card.Content>
    </Card>
  );
}
```

### Exemplo com Formulário

```tsx
import { 
  Button, 
  Input, 
  FormField, 
  Select, 
  Checkbox 
} from '@pineapple-ui/core';
import { useState } from 'react';

function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Lógica de envio
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField label="Nome completo" required>
        <Input placeholder="João Silva" />
      </FormField>

      <FormField label="Email" required>
        <Input type="email" placeholder="joao@exemplo.com" />
      </FormField>

      <FormField label="Assunto">
        <Select>
          <Select.Trigger placeholder="Selecione um assunto" />
          <Select.Content>
            <Select.Item value="suporte">Suporte</Select.Item>
            <Select.Item value="vendas">Vendas</Select.Item>
            <Select.Item value="outro">Outro</Select.Item>
          </Select.Content>
        </Select>
      </FormField>

      <Checkbox>
        Aceito os termos de uso
      </Checkbox>

      <Button 
        type="submit" 
        variant="primary" 
        loading={loading}
      >
        Enviar Mensagem
      </Button>
    </form>
  );
}
```

### Exemplo com Dialog (Modal)

```tsx
import { Button, Dialog } from '@pineapple-ui/core';
import { useState } from 'react';

function ConfirmDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button variant="danger">Excluir Item</Button>
      </Dialog.Trigger>
      
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Confirmar Exclusão</Dialog.Title>
          <Dialog.Description>
            Tem certeza que deseja excluir este item? 
            Esta ação não pode ser desfeita.
          </Dialog.Description>
        </Dialog.Header>
        
        <Dialog.Footer>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button variant="danger">
            Confirmar Exclusão
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
}
```

---

## 🧩 Componentes Disponíveis

### Componentes de Formulário

Componentes para construção de formulários interativos e acessíveis.

| Componente | Descrição | Variantes |
|------------|-----------|-----------|
| **Button** | Botão clicável com estados de loading e disabled | `primary`, `secondary`, `success`, `warning`, `danger`, `ghost`, `link` |
| **Input** | Campo de entrada de texto | `default`, `error`, `success` |
| **Textarea** | Campo de texto multilinha | `default`, `error`, `success` |
| **Select** | Menu dropdown de seleção | `default`, `error`, `success` |
| **Checkbox** | Caixa de seleção | `default`, `error` |
| **Radio** | Botão de opção (radio button) | `default`, `error` |
| **Switch** | Interruptor toggle | `default`, `primary` |
| **FormField** | Wrapper para campos com label e mensagem de erro | - |

#### Exemplo de Uso - Button

```tsx
import { Button } from '@pineapple-ui/core';

// Variantes de cor
<Button variant="primary">Primário</Button>
<Button variant="secondary">Secundário</Button>
<Button variant="success">Sucesso</Button>
<Button variant="warning">Aviso</Button>
<Button variant="danger">Perigo</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Tamanhos
<Button size="sm">Pequeno</Button>
<Button size="md">Médio</Button>
<Button size="lg">Grande</Button>

// Estados
<Button loading>Carregando...</Button>
<Button disabled>Desabilitado</Button>

// Com ícone
<Button leftIcon={<PlusIcon />}>Adicionar</Button>
<Button rightIcon={<ArrowRightIcon />}>Próximo</Button>
```

---

### Componentes de Layout

Componentes para estruturação e organização do layout da página.

| Componente | Descrição | Props Principais |
|------------|-----------|------------------|
| **Box** | Elemento base para layout (div estilizada) | `as`, `padding`, `margin`, `bg` |
| **Flex** | Container flexbox | `direction`, `align`, `justify`, `gap`, `wrap` |
| **Grid** | Container CSS Grid | `columns`, `rows`, `gap`, `areas` |
| **Container** | Container centralizado com largura máxima | `size`, `padding` |
| **Stack** | Empilhamento vertical ou horizontal | `direction`, `spacing`, `divider` |

#### Exemplo de Uso - Flex e Grid

```tsx
import { Flex, Grid, Box, Container } from '@pineapple-ui/core';

// Flex - Layout horizontal
<Flex align="center" justify="between" gap="4">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
  <Box>Item 3</Box>
</Flex>

// Grid - Layout em grade
<Grid columns={3} gap="4">
  <Box>Coluna 1</Box>
  <Box>Coluna 2</Box>
  <Box>Coluna 3</Box>
</Grid>

// Container - Conteúdo centralizado
<Container size="lg" padding="6">
  <h1>Conteúdo centralizado</h1>
</Container>

// Stack - Empilhamento com espaçamento
<Stack direction="vertical" spacing="4">
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</Stack>
```

---

### Componentes de Navegação

Componentes para navegação e menus.

| Componente | Descrição | Subcomponentes |
|------------|-----------|----------------|
| **Tabs** | Navegação em abas | `Tabs.List`, `Tabs.Trigger`, `Tabs.Content` |
| **Menu** | Menu de navegação | `Menu.Root`, `Menu.Item`, `Menu.Separator` |
| **Dropdown** | Menu dropdown | `Dropdown.Trigger`, `Dropdown.Content`, `Dropdown.Item` |
| **Breadcrumb** | Navegação breadcrumb | `Breadcrumb.List`, `Breadcrumb.Item`, `Breadcrumb.Link` |

#### Exemplo de Uso - Tabs

```tsx
import { Tabs } from '@pineapple-ui/core';

<Tabs defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">Visão Geral</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Configurações</Tabs.Trigger>
    <Tabs.Trigger value="tab3">Avançado</Tabs.Trigger>
  </Tabs.List>
  
  <Tabs.Content value="tab1">
    <p>Conteúdo da aba Visão Geral</p>
  </Tabs.Content>
  
  <Tabs.Content value="tab2">
    <p>Conteúdo da aba Configurações</p>
  </Tabs.Content>
  
  <Tabs.Content value="tab3">
    <p>Conteúdo da aba Avançado</p>
  </Tabs.Content>
</Tabs>
```

---

### Componentes de Feedback

Componentes para exibir feedback e notificações ao usuário.

| Componente | Descrição | Variantes |
|------------|-----------|-----------|
| **Alert** | Mensagem de alerta | `info`, `success`, `warning`, `error` |
| **Toast** | Notificação temporária | `info`, `success`, `warning`, `error` |
| **Dialog** | Modal de diálogo | `default`, `alert` |
| **Tooltip** | Dica de ferramenta | `top`, `bottom`, `left`, `right` |

#### Exemplo de Uso - Alert e Toast

```tsx
import { Alert, Toast, useToast } from '@pineapple-ui/core';

// Alert - Mensagem estática
<Alert variant="success">
  <Alert.Title>Sucesso!</Alert.Title>
  <Alert.Description>
    Sua operação foi concluída com sucesso.
  </Alert.Description>
</Alert>

<Alert variant="error">
  <Alert.Title>Erro</Alert.Title>
  <Alert.Description>
    Ocorreu um erro ao processar sua solicitação.
  </Alert.Description>
</Alert>

// Toast - Notificação temporária
function ToastExample() {
  const { toast } = useToast();

  return (
    <Button onClick={() => toast({
      title: 'Salvo!',
      description: 'Suas alterações foram salvas.',
      variant: 'success',
    })}>
      Salvar
    </Button>
  );
}
```

---

### Componentes de Exibição de Dados

Componentes para apresentação de informações.

| Componente | Descrição | Subcomponentes |
|------------|-----------|----------------|
| **Card** | Container de conteúdo | `Card.Header`, `Card.Title`, `Card.Description`, `Card.Content`, `Card.Footer` |
| **Badge** | Etiqueta de status | `default`, `primary`, `success`, `warning`, `danger` |
| **Avatar** | Imagem de perfil | `Avatar.Image`, `Avatar.Fallback` |
| **Table** | Tabela de dados | `Table.Header`, `Table.Body`, `Table.Row`, `Table.Cell` |

#### Exemplo de Uso - Card e Table

```tsx
import { Card, Table, Badge, Avatar } from '@pineapple-ui/core';

// Card completo
<Card>
  <Card.Header>
    <Card.Title>Título do Card</Card.Title>
    <Card.Description>Descrição opcional</Card.Description>
  </Card.Header>
  <Card.Content>
    <p>Conteúdo principal do card</p>
  </Card.Content>
  <Card.Footer>
    <Button variant="ghost">Cancelar</Button>
    <Button variant="primary">Confirmar</Button>
  </Card.Footer>
</Card>

// Table com dados
<Table>
  <Table.Header>
    <Table.Row>
      <Table.Head>Usuário</Table.Head>
      <Table.Head>Status</Table.Head>
      <Table.Head>Ações</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>
        <Flex align="center" gap="2">
          <Avatar>
            <Avatar.Image src="/avatar.jpg" />
            <Avatar.Fallback>JS</Avatar.Fallback>
          </Avatar>
          João Silva
        </Flex>
      </Table.Cell>
      <Table.Cell>
        <Badge variant="success">Ativo</Badge>
      </Table.Cell>
      <Table.Cell>
        <Button size="sm" variant="ghost">Editar</Button>
      </Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

---

## 🎨 Sistema de Design Tokens

O Pineapple UI utiliza um sistema de **Design Tokens** baseado em CSS Custom Properties, permitindo customização completa da aparência dos componentes.

### O que são Design Tokens?

Design Tokens são variáveis que armazenam valores de design como cores, espaçamentos, tipografia, bordas, etc. Eles permitem:

- **Consistência**: Mesmos valores em toda a aplicação
- **Manutenibilidade**: Altere um token, atualize toda a UI
- **Tematização**: Crie temas diferentes facilmente
- **Acessibilidade**: Garanta contraste adequado

### Categorias de Tokens

#### 🎨 Cores

O Pineapple UI usa o espaço de cor **oklch** para manipulação perceptualmente uniforme:

```css
:root {
  /* Cores Primárias */
  --color-primary-50: oklch(0.97 0.02 250);
  --color-primary-100: oklch(0.93 0.04 250);
  --color-primary-500: oklch(0.55 0.15 250);
  --color-primary-600: oklch(0.48 0.15 250);
  --color-primary-900: oklch(0.25 0.08 250);

  /* Cores Semânticas */
  --color-success: oklch(0.65 0.15 145);
  --color-warning: oklch(0.75 0.15 85);
  --color-danger: oklch(0.55 0.2 25);
  --color-info: oklch(0.6 0.12 230);

  /* Cores de Superfície */
  --color-background: oklch(0.99 0.005 250);
  --color-foreground: oklch(0.15 0.02 250);
  --color-muted: oklch(0.95 0.01 250);
  --color-border: oklch(0.9 0.01 250);
}
```

#### 📏 Espaçamento

Escala baseada em unidade de 4px:

```css
:root {
  --spacing-0: 0;
  --spacing-1: 0.25rem;  /* 4px */
  --spacing-2: 0.5rem;   /* 8px */
  --spacing-3: 0.75rem;  /* 12px */
  --spacing-4: 1rem;     /* 16px */
  --spacing-5: 1.25rem;  /* 20px */
  --spacing-6: 1.5rem;   /* 24px */
  --spacing-8: 2rem;     /* 32px */
  --spacing-10: 2.5rem;  /* 40px */
  --spacing-12: 3rem;    /* 48px */
  --spacing-16: 4rem;    /* 64px */
}
```

#### 🔤 Tipografia

```css
:root {
  /* Font Families */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Font Sizes */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */

  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  /* Line Heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
}
```

#### 🔲 Bordas e Sombras

```css
:root {
  /* Border Radius */
  --radius-none: 0;
  --radius-sm: 0.25rem;   /* 4px */
  --radius-md: 0.375rem;  /* 6px */
  --radius-lg: 0.5rem;    /* 8px */
  --radius-xl: 0.75rem;   /* 12px */
  --radius-2xl: 1rem;     /* 16px */
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
```

---

## 🌙 Temas e Customização

### Tema Claro e Escuro

O Pineapple UI suporta temas claro e escuro nativamente:

```css
/* Tema Claro (padrão) */
:root {
  --color-background: oklch(0.99 0.005 250);
  --color-foreground: oklch(0.15 0.02 250);
  --color-card: oklch(1 0 0);
  --color-border: oklch(0.9 0.01 250);
}

/* Tema Escuro */
.dark {
  --color-background: oklch(0.15 0.02 260);
  --color-foreground: oklch(0.95 0.01 250);
  --color-card: oklch(0.2 0.02 260);
  --color-border: oklch(0.3 0.02 260);
}

/* Ou usando media query */
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: oklch(0.15 0.02 260);
    --color-foreground: oklch(0.95 0.01 250);
  }
}
```

### Implementando Toggle de Tema

```tsx
import { useEffect, useState } from 'react';
import { Button } from '@pineapple-ui/core';
import { SunIcon, MoonIcon } from '@pineapple-ui/icons';

function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
}
```

### Criando um Tema Personalizado

Você pode criar temas completamente personalizados:

```css
/* styles/custom-theme.css */
:root {
  /* Sua paleta de cores personalizada */
  --color-primary-500: oklch(0.6 0.2 150);  /* Verde */
  --color-primary-600: oklch(0.5 0.2 150);
  
  /* Tipografia personalizada */
  --font-sans: 'Poppins', sans-serif;
  
  /* Bordas mais arredondadas */
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
}

/* Tema da sua marca */
.theme-brand {
  --color-primary-500: oklch(0.55 0.25 30);  /* Laranja */
  --color-primary-600: oklch(0.45 0.25 30);
}
```

```tsx
// Aplicando o tema
<div className="theme-brand">
  <Button variant="primary">Botão com cor da marca</Button>
</div>
```

---

## ♿ Acessibilidade

O Pineapple UI foi construído com acessibilidade como prioridade. Todos os componentes seguem as diretrizes **WCAG 2.2** e padrões **WAI-ARIA**.

### Recursos de Acessibilidade

| Recurso | Descrição |
|---------|-----------|
| **Navegação por Teclado** | Todos os componentes interativos são acessíveis via teclado |
| **Foco Visível** | Indicadores de foco claros e consistentes |
| **Leitores de Tela** | Atributos ARIA apropriados e anúncios de estado |
| **Contraste de Cores** | Cores que atendem ao nível AA do WCAG |
| **Gerenciamento de Foco** | Focus trapping em modais e menus |
| **Redução de Movimento** | Respeita `prefers-reduced-motion` |

### Atalhos de Teclado

| Componente | Tecla | Ação |
|------------|-------|------|
| **Button** | `Enter`, `Space` | Ativar botão |
| **Dialog** | `Escape` | Fechar modal |
| **Menu** | `↑` `↓` | Navegar entre itens |
| **Menu** | `Enter` | Selecionar item |
| **Tabs** | `←` `→` | Navegar entre abas |
| **Select** | `↑` `↓` | Navegar opções |
| **Select** | `Enter` | Selecionar opção |

### Exemplo de Componente Acessível

```tsx
import { Button, Dialog } from '@pineapple-ui/core';

// O Dialog já inclui:
// - role="dialog"
// - aria-modal="true"
// - aria-labelledby (título)
// - aria-describedby (descrição)
// - Focus trap automático
// - Fechamento com Escape

<Dialog>
  <Dialog.Trigger asChild>
    <Button>Abrir Modal</Button>
  </Dialog.Trigger>
  
  <Dialog.Content>
    <Dialog.Title>Título Acessível</Dialog.Title>
    <Dialog.Description>
      Esta descrição é anunciada por leitores de tela.
    </Dialog.Description>
    {/* Conteúdo */}
  </Dialog.Content>
</Dialog>
```

### Testando Acessibilidade

```tsx
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from '@pineapple-ui/core';

expect.extend(toHaveNoViolations);

test('Button não deve ter violações de acessibilidade', async () => {
  const { container } = render(<Button>Clique aqui</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

---

## 💻 Desenvolvimento

### Configuração do Ambiente

```bash
# 1. Clone o repositório
git clone https://github.com/pineapple-ui/pineapple-ui.git
cd pineapple-ui

# 2. Instale as dependências
pnpm install

# 3. Inicie o ambiente de desenvolvimento
pnpm dev
```

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `pnpm dev` | Inicia o modo de desenvolvimento |
| `pnpm build` | Compila todos os pacotes para produção |
| `pnpm test` | Executa todos os testes |
| `pnpm test:watch` | Executa testes em modo watch |
| `pnpm lint` | Executa o linter em todos os pacotes |
| `pnpm format` | Formata o código com Prettier |
| `pnpm typecheck` | Verifica tipos TypeScript |
| `pnpm storybook` | Inicia o Storybook |
| `pnpm clean` | Limpa builds e node_modules |

### Estrutura de um Componente

Cada componente segue uma estrutura padronizada:

```
packages/core/src/components/button/
├── button.tsx          # Implementação do componente
├── button.styles.ts    # Estilos com CVA (Class Variance Authority)
├── button.test.tsx     # Testes unitários
├── button.stories.tsx  # Stories do Storybook
└── index.ts            # Exports públicos
```

### Criando um Novo Componente

```tsx
// 1. Crie o arquivo de estilos (button.styles.ts)
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white hover:bg-primary-600',
        secondary: 'bg-secondary-500 text-white hover:bg-secondary-600',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

// 2. Crie o componente (button.tsx)
import { forwardRef } from 'react';
import { cn } from '@pineapple-ui/utils';
import { buttonVariants, type ButtonVariants } from './button.styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? <Spinner /> : children}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

---

## 🧪 Testes

O Pineapple UI possui uma infraestrutura robusta de testes para garantir qualidade e confiabilidade.

### Tipos de Testes

| Tipo | Ferramenta | Descrição |
|------|------------|-----------|
| **Unitários** | Vitest + Testing Library | Testa comportamento dos componentes |
| **Property-based** | fast-check | Testa com inputs aleatórios |
| **Acessibilidade** | axe-core + jest-axe | Valida conformidade WCAG |
| **Visual** | Storybook | Captura e compara screenshots |

### Executando Testes

```bash
# Executar todos os testes
pnpm test

# Executar testes em modo watch
pnpm test:watch

# Executar testes com cobertura
pnpm test -- --coverage

# Executar testes de um pacote específico
pnpm test --filter=@pineapple-ui/core
```

### Exemplo de Teste Unitário

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './button';

describe('Button', () => {
  it('deve renderizar com o texto correto', () => {
    render(<Button>Clique aqui</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Clique aqui');
  });

  it('deve chamar onClick quando clicado', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clique</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('não deve chamar onClick quando disabled', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} disabled>Clique</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('deve aplicar a variante correta', () => {
    render(<Button variant="danger">Perigo</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-danger-500');
  });
});
```

### Exemplo de Property-based Test

```tsx
import { fc } from 'fast-check';
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button - Property-based tests', () => {
  it('deve sempre renderizar o texto fornecido', () => {
    fc.assert(
      fc.property(fc.string({ minLength: 1 }), (text) => {
        render(<Button>{text}</Button>);
        expect(screen.getByRole('button')).toHaveTextContent(text);
      })
    );
  });
});
```

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Siga os passos abaixo para contribuir com o projeto.

### Como Contribuir

1. **Fork o repositório**
   ```bash
   git clone https://github.com/seu-usuario/pineapple-ui.git
   ```

2. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/minha-nova-feature
   ```

3. **Faça suas alterações**
   - Siga os padrões de código existentes
   - Adicione testes para novas funcionalidades
   - Atualize a documentação se necessário

4. **Execute os testes**
   ```bash
   pnpm test
   pnpm lint
   pnpm typecheck
   ```

5. **Crie um changeset**
   ```bash
   pnpm changeset
   ```
   Siga as instruções para descrever suas alterações.

6. **Commit suas alterações**
   ```bash
   git commit -m "feat: adiciona novo componente X"
   ```
   
   Usamos [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` Nova funcionalidade
   - `fix:` Correção de bug
   - `docs:` Documentação
   - `style:` Formatação
   - `refactor:` Refatoração
   - `test:` Testes
   - `chore:` Manutenção

7. **Push e abra um Pull Request**
   ```bash
   git push origin feature/minha-nova-feature
   ```

### Diretrizes de Código

- ✅ Use TypeScript com tipagem estrita
- ✅ Siga os padrões ESLint e Prettier configurados
- ✅ Escreva testes para novas funcionalidades
- ✅ Documente componentes com JSDoc
- ✅ Garanta acessibilidade (WCAG 2.2)
- ✅ Mantenha bundles pequenos (< 10KB por componente)
- ❌ Não use `any` sem justificativa
- ❌ Não deixe `console.log` em produção
- ❌ Não ignore erros TypeScript

### Reportando Bugs

Ao reportar um bug, inclua:

1. Descrição clara do problema
2. Passos para reproduzir
3. Comportamento esperado vs atual
4. Versão do Pineapple UI
5. Versão do React e navegador
6. Código de exemplo (se possível)

### Sugerindo Features

Ao sugerir uma feature:

1. Verifique se já não existe uma issue similar
2. Descreva o caso de uso
3. Explique por que seria útil
4. Forneça exemplos de API desejada

---

## 📋 Roadmap

### ✅ Versão 1.0 (Atual)

- [x] Componentes de formulário (Button, Input, Select, etc.)
- [x] Componentes de layout (Box, Flex, Grid, Container)
- [x] Componentes de navegação (Tabs, Menu, Dropdown)
- [x] Componentes de feedback (Alert, Toast, Dialog)
- [x] Sistema de design tokens
- [x] Suporte a tema escuro
- [x] Documentação com Storybook

### 🚧 Versão 1.1 (Em desenvolvimento)

- [ ] Componente DatePicker
- [ ] Componente Slider
- [ ] Componente Accordion
- [ ] Componente Pagination
- [ ] Melhorias de performance

### 📅 Versão 2.0 (Planejado)

- [ ] Componentes de gráficos
- [ ] Sistema de animações
- [ ] Gerador de temas visual
- [ ] Suporte a React Server Components
- [ ] CLI para scaffolding

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT** - veja o arquivo [LICENSE](LICENSE) para detalhes.

```
MIT License

Copyright (c) 2025 Pineapple UI Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Agradecimentos

Este projeto foi inspirado e construído sobre o trabalho de projetos incríveis:

- [Radix UI](https://www.radix-ui.com/) - Primitivos acessíveis
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [shadcn/ui](https://ui.shadcn.com/) - Inspiração de design
- [Chakra UI](https://chakra-ui.com/) - Padrões de API

---

## 📞 Suporte

- 📖 [Documentação](https://pineapple-ui.dev/docs)
- 💬 [Discussões GitHub](https://github.com/pineapple-ui/pineapple-ui/discussions)
- 🐛 [Issues](https://github.com/pineapple-ui/pineapple-ui/issues)
- 🐦 [Twitter](https://twitter.com/pineapple_ui)

---

<p align="center">
  <img src="pineapple.png" alt="Pineapple UI" width="60" />
</p>

<p align="center">
  Feito com 🍍 pelo time Pineapple UI
</p>

<p align="center">
  <a href="#-pineapple-ui">Voltar ao topo ↑</a>
</p>
