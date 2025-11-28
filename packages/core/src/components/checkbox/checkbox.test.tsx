import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import fc from 'fast-check';
import { Checkbox } from './checkbox';

describe('Checkbox Component', () => {
  /**
   * **Feature: pineapple-ui, Property 6: ARIA Attribute Presence**
   * **Validates: Requirements 4.1**
   *
   * For any interactive headless component,
   * when rendered, the component SHALL include all required ARIA attributes.
   */
  it('should have correct ARIA role and state attributes', () => {
    const states = [true, false, 'indeterminate'] as const;

    fc.assert(
      fc.property(fc.constantFrom(...states), (checked) => {
        const { unmount } = render(<Checkbox checked={checked} data-testid="checkbox" />);
        const checkbox = screen.getByTestId('checkbox');

        // Verify role
        expect(checkbox).toHaveAttribute('role', 'checkbox');

        // Verify aria-checked based on state
        if (checked === 'indeterminate') {
          expect(checkbox).toHaveAttribute('aria-checked', 'mixed');
        } else if (checked) {
          expect(checkbox).toHaveAttribute('aria-checked', 'true');
        } else {
          expect(checkbox).toHaveAttribute('aria-checked', 'false');
        }

        unmount();
      }),
      { numRuns: 100 }
    );
  });

  it('should forward ref to checkbox element', () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Checkbox ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it('should apply error variant styles when error is true', () => {
    render(<Checkbox error data-testid="checkbox" />);
    const checkbox = screen.getByTestId('checkbox');
    expect(checkbox.className).toContain('border-danger-500');
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Checkbox disabled data-testid="checkbox" />);
    expect(screen.getByTestId('checkbox')).toBeDisabled();
  });
});
