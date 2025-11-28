import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import fc from 'fast-check';
import { Input } from './input';

describe('Input Component', () => {
  /**
   * **Feature: pineapple-ui, Property 11: Required Field Indication**
   * **Validates: Requirements 12.4**
   *
   * For any form component with required=true,
   * the element SHALL have aria-required="true" attribute.
   */
  it('should have aria-required when required prop is true', () => {
    fc.assert(
      fc.property(fc.boolean(), (required) => {
        const { unmount } = render(<Input required={required} data-testid="input" />);
        const input = screen.getByTestId('input');

        if (required) {
          expect(input).toHaveAttribute('aria-required', 'true');
        } else {
          expect(input).not.toHaveAttribute('aria-required');
        }

        unmount();
      }),
      { numRuns: 100 }
    );
  });

  /**
   * **Feature: pineapple-ui, Property 6: ARIA Attribute Presence**
   * **Validates: Requirements 4.1**
   *
   * For any interactive headless component,
   * when rendered, the component SHALL include all required ARIA attributes.
   */
  it('should have aria-invalid when error prop is true', () => {
    fc.assert(
      fc.property(fc.boolean(), (error) => {
        const { unmount } = render(<Input error={error} data-testid="input" />);
        const input = screen.getByTestId('input');

        if (error) {
          expect(input).toHaveAttribute('aria-invalid', 'true');
        } else {
          expect(input).not.toHaveAttribute('aria-invalid');
        }

        unmount();
      }),
      { numRuns: 100 }
    );
  });

  it('should forward ref to input element', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('should apply error variant styles when error is true', () => {
    render(<Input error data-testid="input" />);
    const input = screen.getByTestId('input');
    expect(input.className).toContain('border-danger-500');
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Input disabled data-testid="input" />);
    expect(screen.getByTestId('input')).toBeDisabled();
  });
});
