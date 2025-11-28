# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial component library structure with monorepo architecture
- Core styled components package (`@pineapple-ui/core`)
  - Button with variants (primary, secondary, outline, ghost, destructive)
  - Input with error states and accessibility support
  - Checkbox with indeterminate state
  - Radio group component
  - Select dropdown with search support
  - Alert with status variants (info, success, warning, error)
  - Card with variants (elevated, outlined, filled)
  - Dialog modal with accessibility features
  - Toast notifications with auto-dismiss
  - Table with full subcomponent support
  - Form field with label, description, and error handling
  - Layout components (Box, Flex, Grid, Stack, Container)
  - Avatar with fallback initials
  - Badge with dot indicator
  - Breadcrumb navigation
  - Dropdown and Menu components
  - Tabs component
  - Textarea with auto-resize
  - Switch toggle
  - Tooltip component
- Primitives package (`@pineapple-ui/primitives`) with headless components
- Design tokens package (`@pineapple-ui/tokens`)
  - oklch color system for perceptually uniform colors
  - Spacing scale based on 4px grid
  - Typography tokens (font family, size, weight, line height)
  - Border radius tokens
  - Shadow tokens
  - Transition duration tokens
  - Dark theme support
- Icons package (`@pineapple-ui/icons`) with SVG icon components
- Utils package (`@pineapple-ui/utils`)
  - `cn` utility for class name merging
  - Custom error classes (PineappleUIError, InvalidPropError, MissingContextError)
- Storybook documentation app
- Property-based testing with fast-check
- Accessibility testing with jest-axe patterns
- SSR hydration consistency tests
- Tailwind CSS integration with token-based theme

### Changed

- Button loading state now preserved when using `asChild` prop
- FormField validates children prop with proper error handling
- Select and Toast components now use icons from `@pineapple-ui/icons`
- Extracted component styles to separate `.styles.ts` files
- Tailwind config now imports tokens from `@pineapple-ui/tokens` (single source of truth)

### Fixed

- Button `aria-busy` attribute now correctly set during loading state
- FormField type safety improved with React.isValidElement validation
- Removed hardcoded color values (bg-white) in favor of design tokens
- Toast uses `role="alert"` for error status and `role="status"` for others

## [0.0.0] - 2025-11-28

### Added

- Initial project setup
- Monorepo configuration with pnpm workspaces and Turborepo
- TypeScript configuration
- ESLint and Prettier setup
- Vitest testing framework
- CI/CD workflows

[Unreleased]: https://github.com/pineapple-ui/pineapple-ui/compare/v0.0.0...HEAD
[0.0.0]: https://github.com/pineapple-ui/pineapple-ui/releases/tag/v0.0.0
