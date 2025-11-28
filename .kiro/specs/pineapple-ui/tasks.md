# Implementation Plan

- [x] 1. Initialize monorepo structure and tooling
  - [x] 1.1 Create root package.json with pnpm workspaces configuration
    - Initialize pnpm workspace with `pnpm-workspace.yaml`
    - Configure root scripts for build, test, lint, and release
    - Add devDependencies: typescript, turbo, @changesets/cli, rimraf
    - _Requirements: 1.1, 1.2_
  - [x] 1.2 Configure Turborepo for parallel builds and caching
    - Create `turbo.json` with pipeline configuration
    - Define build, test, lint, and dev tasks with dependencies
    - Configure cache outputs for each task type
    - _Requirements: 1.3, 1.5_
  - [x] 1.3 Set up shared TypeScript configuration
    - Create `tooling/tsconfig/base.json` with strict mode enabled
    - Create `tooling/tsconfig/react-library.json` extending base
    - Configure declaration file generation and path aliases
    - _Requirements: 2.1, 2.2_
  - [x] 1.4 Set up shared ESLint configuration
    - Create `tooling/eslint-config/` package
    - Configure rules for React, TypeScript, and accessibility
    - Add prettier integration
    - _Requirements: 2.1_
  - [x] 1.5 Set up shared Tailwind configuration
    - Create `tooling/tailwind-config/` package
    - Define base theme with design tokens using @theme directive
    - Configure content paths for monorepo structure
    - _Requirements: 3.1, 3.2_
  - [x] 1.6 Set up Vitest and fast-check for testing
    - Configure vitest.config.ts with React Testing Library
    - Install fast-check for property-based testing
    - Install jest-axe for accessibility testing
    - _Requirements: 8.1, 8.2, 8.3_

- [x] 2. Create @pineapple-ui/utils package
  - [x] 2.1 Initialize utils package structure
    - Create `packages/utils/` with package.json and tsconfig.json
    - Set up build configuration with tsup
    - Configure exports for ESM and CJS
    - _Requirements: 1.2, 2.2_
  - [x] 2.2 Implement cn utility for class merging
    - Install clsx and tailwind-merge dependencies
    - Create `cn` function that combines clsx and twMerge
    - Export from package index
    - _Requirements: 5.5_
  - [x] 2.3 Write property test for class merging
    - **Property 5: Class Merging Override**
    - Test that custom classes override conflicting defaults
    - **Validates: Requirements 5.5**
  - [x] 2.4 Implement error classes
    - Create PineappleUIError base class
    - Create InvalidPropError and MissingContextError
    - Export all error types
    - _Requirements: 2.5_

- [x] 3. Create @pineapple-ui/tokens package
  - [x] 3.1 Initialize tokens package structure
    - Create `packages/tokens/` with package.json and tsconfig.json
    - Set up build configuration
    - _Requirements: 1.2_
  - [x] 3.2 Define TypeScript interfaces for tokens
    - Create ThemeTokens, ColorTokens, SpacingTokens interfaces
    - Create TypographyTokens, RadiiTokens, ShadowTokens interfaces
    - Export all types from package
    - _Requirements: 2.5, 3.1_
  - [x] 3.3 Implement default theme with oklch colors
    - Create defaultTheme object with complete color scales
    - Define spacing scale based on 4px unit
    - Define typography, radii, shadows, and transitions
    - _Requirements: 3.3, 3.4, 3.5_
  - [x] 3.4 Write property test for spacing scale
    - **Property 2: Spacing Scale Consistency**
    - Verify all spacing values are multiples of 4
    - **Validates: Requirements 3.4**
  - [x] 3.5 Write property test for color format
    - **Property 3: Color Format Validity**
    - Verify all colors match oklch pattern
    - **Validates: Requirements 3.3**
  - [x] 3.6 Implement token serialization
    - Create serializeTokens function for JSON output
    - Create deserializeTokens function for JSON parsing
    - Create tokensToCSS function for CSS generation
    - _Requirements: 3.7_
  - [x] 3.7 Write property test for token round-trip
    - **Property 1: Token Round-Trip Consistency**
    - Verify serialize then deserialize equals original
    - **Validates: Requirements 3.7**
  - [x] 3.8 Implement dark mode token variants
    - Create dark theme variant with adjusted colors
    - Export CSS for class-based dark mode toggle
    - _Requirements: 3.6_
  - [x] 3.9 Write property test for dark mode switch
    - **Property 16: Dark Mode Token Switch**
    - Verify dark mode class changes computed styles
    - **Validates: Requirements 3.6**

- [x] 4. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Create @pineapple-ui/primitives package
  - [x] 5.1 Initialize primitives package structure
    - Create `packages/primitives/` with package.json and tsconfig.json
    - Install @radix-ui/react-* dependencies
    - Set up build configuration
    - _Requirements: 1.2, 4.3_

  - [x] 5.2 Implement Dialog primitive
    - Re-export Radix Dialog with typed props
    - Export Root, Trigger, Portal, Overlay, Content, Title, Description, Close
    - Add JSDoc documentation
    - _Requirements: 4.3, 4.5_
  - [x] 5.3 Write property test for Dialog focus trap
    - **Property 7: Focus Trap Containment**
    - Verify Tab cycles within modal
    - **Validates: Requirements 4.5**
  - [x] 5.4 Implement Menu primitive
    - Re-export Radix DropdownMenu with typed props
    - Export Root, Trigger, Content, Item, Separator
    - Add keyboard navigation support
    - _Requirements: 4.2, 4.3_
  - [x] 5.5 Write property test for Menu keyboard navigation
    - **Property 8: Keyboard Navigation Consistency**
    - Verify arrow keys move focus correctly
    - **Validates: Requirements 4.2**
  - [x] 5.6 Implement Tabs primitive
    - Re-export Radix Tabs with typed props
    - Export Root, List, Trigger, Content
    - _Requirements: 4.2, 4.3_
  - [x] 5.7 Implement Select primitive
    - Re-export Radix Select with typed props
    - Export Root, Trigger, Value, Content, Item, Group
    - _Requirements: 4.2, 4.3_
  - [x] 5.8 Implement Tooltip primitive
    - Re-export Radix Tooltip with typed props
    - Export Provider, Root, Trigger, Content
    - _Requirements: 4.3_
  - [x] 5.9 Write property test for component part exports
    - **Property 17: Component Part Exports**
    - Verify all compound components export required parts
    - **Validates: Requirements 4.3**

- [x] 6. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 7. Create @pineapple-ui/core package - Foundation
  - [x] 7.1 Initialize core package structure
    - Create `packages/core/` with package.json and tsconfig.json
    - Add dependencies on primitives, tokens, and utils
    - Install class-variance-authority
    - Set up build configuration with tsup
    - _Requirements: 1.2, 5.1_
  - [x] 7.2 Implement Button component with CVA variants
    - Create button.styles.ts with CVA configuration
    - Create Button component with variant, size, loading props
    - Support asChild prop via Radix Slot
    - Forward ref to button element
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 10.1, 12.1_
  - [x] 7.3 Write property test for Button CVA variants
    - **Property 4: CVA Variant Class Generation**
    - Verify correct classes for all variant combinations
    - **Validates: Requirements 5.2, 5.3, 5.4, 5.6**
  - [x] 7.4 Write property test for Button ref forwarding
    - **Property 9: Ref Forwarding**
    - Verify ref references underlying button element
    - **Validates: Requirements 12.1**
  - [x] 7.5 Write accessibility test for Button
    - **Property 15: Accessibility Compliance**
    - Run axe-core and verify no violations
    - **Validates: Requirements 8.3**

- [x] 8. Create @pineapple-ui/core - Form Components
  - [x] 8.1 Implement Input component
    - Create input.styles.ts with CVA variants
    - Support error, disabled, required states
    - Forward ref to input element
    - _Requirements: 10.1, 12.1, 12.2, 12.4_
  - [x] 8.2 Write property test for Input required indication
    - **Property 11: Required Field Indication**
    - Verify aria-required="true" when required
    - **Validates: Requirements 12.4**
  - [x] 8.3 Implement Textarea component
    - Create textarea.styles.ts with CVA variants
    - Support error, disabled, required states
    - Forward ref to textarea element
    - _Requirements: 10.1, 12.1_
  - [x] 8.4 Implement FormField wrapper component
    - Create FormField with Label, Input, and ErrorMessage slots
    - Implement aria-describedby linking for errors
    - _Requirements: 12.3_
  - [x] 8.5 Write property test for error state association
    - **Property 10: Error State Association**
    - Verify aria-describedby links error to input
    - **Validates: Requirements 12.3**
  - [x] 8.6 Implement Checkbox component
    - Use Radix Checkbox primitive
    - Add CVA styling with checked, indeterminate states
    - _Requirements: 10.1, 4.1_

  - [x] 8.7 Implement Radio and RadioGroup components
    - Use Radix RadioGroup primitive
    - Add CVA styling
    - _Requirements: 10.1, 4.1_

  - [x] 8.8 Implement Switch component
    - Use Radix Switch primitive
    - Add CVA styling with on/off states
    - _Requirements: 10.1, 4.1_
  - [x] 8.9 Implement Select component (styled)
    - Wrap primitives/Select with CVA styling
    - Support error, disabled states
    - _Requirements: 10.1, 4.1_
  - [x] 8.10 Write property test for ARIA attributes
    - **Property 6: ARIA Attribute Presence**
    - Verify all form components have required ARIA
    - **Validates: Requirements 4.1**

- [x] 9. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 10. Create @pineapple-ui/core - Layout Components
  - [x] 10.1 Implement Box component
    - Create polymorphic Box with as prop
    - Support all spacing and layout props
    - _Requirements: 10.2_

  - [x] 10.2 Implement Flex component
    - Extend Box with flexbox defaults
    - Add direction, align, justify, gap props
    - _Requirements: 10.2_
  - [x] 10.3 Implement Grid component
    - Extend Box with grid defaults
    - Add columns, rows, gap props
    - _Requirements: 10.2_
  - [x] 10.4 Implement Stack component
    - Create vertical/horizontal stack with gap
    - Support divider prop
    - _Requirements: 10.2_
  - [x] 10.5 Implement Container component
    - Create max-width container with responsive sizes
    - Support centered and fluid variants
    - _Requirements: 10.2_

- [x] 11. Create @pineapple-ui/core - Feedback Components
  - [x] 11.1 Implement Alert component
    - Create with status variants (info, success, warning, error)
    - Support title, description, and icon slots
    - Add appropriate ARIA role
    - _Requirements: 10.4, 4.1_
  - [x] 11.2 Implement Dialog component (styled)
    - Wrap primitives/Dialog with CVA styling
    - Add overlay, content, header, footer styles
    - _Requirements: 10.4, 4.5_
  - [x] 11.3 Implement Toast component
    - Create toast with status variants
    - Implement ToastProvider for positioning
    - Add auto-dismiss functionality
    - _Requirements: 10.4_
  - [x] 11.4 Implement Tooltip component (styled)
    - Wrap primitives/Tooltip with CVA styling
    - Support placement variants
    - _Requirements: 10.4_

- [x] 12. Create @pineapple-ui/core - Navigation Components
  - [x] 12.1 Implement Tabs component (styled)
    - Wrap primitives/Tabs with CVA styling
    - Support variant styles (line, enclosed, soft)
    - _Requirements: 10.3_
  - [x] 12.2 Implement Menu component (styled)
    - Wrap primitives/Menu with CVA styling
    - Support nested menus
    - _Requirements: 10.3_
  - [x] 12.3 Implement Dropdown component
    - Create Dropdown using Menu primitive
    - Add trigger button styling
    - _Requirements: 10.3_
  - [x] 12.4 Implement Breadcrumb component
    - Create Breadcrumb with separator support
    - Add current page indication with aria-current
    - _Requirements: 10.3_

- [x] 13. Create @pineapple-ui/core - Data Display Components
  - [x] 13.1 Implement Card component
    - Create Card with header, body, footer slots
    - Support variant styles (elevated, outlined, filled)
    - _Requirements: 10.5_
  - [x] 13.2 Implement Badge component
    - Create Badge with color and size variants
    - Support dot indicator variant
    - _Requirements: 10.5_
  - [x] 13.3 Implement Avatar component
    - Create Avatar with image, fallback, and initials
    - Support size variants
    - _Requirements: 10.5_
  - [x] 13.4 Implement Table component
    - Create Table with Header, Body, Row, Cell parts
    - Support sortable columns
    - Add proper table ARIA roles
    - _Requirements: 10.5_


- [x] 14. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 15. Create @pineapple-ui/icons package
  - [x] 15.1 Initialize icons package structure
    - Create `packages/icons/` with package.json and tsconfig.json
    - Set up build configuration
    - _Requirements: 1.2, 11.1_
  - [x] 15.2 Implement createIcon factory function
    - Create factory that generates Icon components from SVG paths
    - Support size, color, aria-label props
    - Handle decorative vs semantic icons
    - _Requirements: 11.2, 11.3_
  - [x] 15.3 Write property test for icon accessibility
    - **Property 12: Icon Accessibility**
    - Verify aria-label sets role="img", else aria-hidden="true"
    - **Validates: Requirements 11.3**
  - [x] 15.4 Write property test for icon size and color
    - **Property 13: Icon Size and Color Props**
    - Verify SVG dimensions and stroke match props
    - **Validates: Requirements 11.2**
  - [x] 15.5 Create core icon set
    - Implement common icons (check, x, chevron, arrow, etc.)
    - Implement UI icons (menu, search, settings, user, etc.)
    - Export all icons from package index
    - _Requirements: 11.1_
  - [x] 15.6 Implement Icon wrapper component
    - Create Icon component for custom SVG content
    - Support same props as generated icons
    - _Requirements: 11.4_

- [x] 16. Set up Storybook documentation


  - [x] 16.1 Initialize Storybook in apps/docs



    - Create `apps/docs/` with Storybook 9 configuration
    - Configure for React and Vite
    - Add addon-docs, addon-a11y, addon-controls
    - _Requirements: 6.1, 6.2_
  - [x] 16.2 Configure Storybook theme and branding



    - Create custom theme with Pineapple UI branding
    - Configure sidebar organization by category
    - _Requirements: 6.1_
  - [x] 16.3 Create documentation template



    - Configure autodocs with custom template
    - Add keyboard interaction tables
    - Add ARIA attribute documentation
    - _Requirements: 6.3, 6.4, 6.5_
  - [x] 16.4 Write stories for all components


    - Create stories with all variants and states
    - Add code snippets for each example
    - Document props with JSDoc comments
    - _Requirements: 6.2, 6.3, 6.4_

- [x] 17. Configure build and publishing
  - [x] 17.1 Configure tsup for all packages
    - Set up ESM and CJS dual builds
    - Configure declaration file generation
    - Enable tree-shaking with proper exports
    - _Requirements: 7.1, 7.2_

  - [x] 17.2 Configure package.json exports
    - Add exports field with subpath exports
    - Configure sideEffects for tree-shaking
    - Add peerDependencies for React
    - _Requirements: 7.2_
  - [x] 17.3 Write property test for SSR hydration


    - **Property 14: SSR Hydration Consistency**
    - Verify server and client render match
    - **Validates: Requirements 7.4**
  - [x] 17.4 Configure Changesets


    - Initialize changesets with `pnpm changeset init`
    - Configure changelog generation
    - Set up version and publish scripts
    - _Requirements: 9.1, 9.2, 9.3, 9.4_
  - [x] 17.5 Create GitHub Actions workflow


    - Set up CI for build, test, and lint
    - Configure release workflow with Changesets
    - Add npm publish step
    - _Requirements: 9.5_

- [x] 18. Final Checkpoint - Ensure all tests pass





  - Ensure all tests pass, ask the user if questions arise.
