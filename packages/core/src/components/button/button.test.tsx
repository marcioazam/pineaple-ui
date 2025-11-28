import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import fc from 'fast-check';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './button';
import { buttonVariants } from './button.styles';

expect.extend(toHaveNoViolations);

describe('Button Component', () => {
  /**
   * **Feature: pineapple-ui, Property 4: CVA Variant Class Generation**
   * **Validates: Requirements 5.2, 5.3, 5.4, 5.6**
   *
   * For any valid combination of variant props passed to a CVA-styled component,
   * the generated className string SHALL contain the expected Tailwind classes.
   */
  it('should generate correct classes for all variant combinations', () => {
    const variants = ['primary', 'secondary', 'outline', 'ghost', 'danger'] as const;
    const sizes = ['sm', 'md', 'lg'] as const;

    fc.assert(
      fc.property(fc.constantFrom(...variants), fc.constantFrom(...sizes), (variant, size) => {
        const classes = buttonVariants({ variant, size });

        // Verify base classes are present
        expect(classes).toContain('inline-flex');
        expect(classes).toContain('items-center');
        expect(classes).toContain('font-medium');

        // Verify size-specific classes
        if (size === 'sm') {
          expect(classes).toContain('h-8');
          expect(classes).toContain('text-sm');
        } else if (size === 'md') {
          expect(classes).toContain('h-10');
          expect(classes).toContain('text-base');
        } else {
          expect(classes).toContain('h-12');
          expect(classes).toContain('text-lg');
        }

        // Verify variant-specific classes
        if (variant === 'primary') {
          expect(classes).toContain('bg-primary-500');
        } else if (variant === 'danger') {
          expect(classes).toContain('bg-danger-500');
        }
      }),
      { numRuns: 100 }
    );
  });

  /**
   * **Feature: pineapple-ui, Property 9: Ref Forwarding**
   * **Validates: Requirements 12.1**
   *
   * For any form component (Input, Select, Checkbox, etc.),
   * the forwarded ref SHALL reference the underlying native form element.
   */
  it('should forward ref to underlying button element', () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Button ref={ref}>Click me</Button>);

    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
    expect(ref.current?.tagName).toBe('BUTTON');
  });

  /**
   * **Feature: pineapple-ui, Property 15: Accessibility Compliance**
   * **Validates: Requirements 8.3**
   *
   * For any component rendered in the DOM, running axe-core accessibility checks
   * SHALL return zero violations for WCAG 2.2 Level AA.
   */
  it('should have no accessibility violations', async () => {
    const { container } = render(<Button>Accessible Button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render with default variant and size', () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByRole('button', { name: 'Default Button' });
    expect(button).toBeInTheDocument();
    expect(button.className).toContain('bg-primary-500');
    expect(button.className).toContain('h-10');
  });

  it('should show loading spinner when loading', () => {
    render(<Button loading>Loading</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should render left and right icons', () => {
    render(
      <Button leftIcon={<span data-testid="left">L</span>} rightIcon={<span data-testid="right">R</span>}>
        With Icons
      </Button>
    );
    expect(screen.getByTestId('left')).toBeInTheDocument();
    expect(screen.getByTestId('right')).toBeInTheDocument();
  });

  it('should render as child element when asChild is true', () => {
    render(
      <Button asChild variant="primary" size="md">
        <a href="/test" className="custom-link">
          Link Button
        </a>
      </Button>
    );
    const link = screen.getByRole('link', { name: 'Link Button' });
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe('A');
    // Verify styles are merged onto the child
    expect(link.className).toContain('bg-primary-500');
  });
});
