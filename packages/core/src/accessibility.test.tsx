import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import fc from 'fast-check';
import * as React from 'react';
import { Button } from './components/button/button';
import { Checkbox } from './components/checkbox/checkbox';
import { Alert } from './components/alert/alert';
import { Toast } from './components/toast/toast';

/**
 * **Feature: code-review-engine, Property 5: ARIA Compliance**
 * **Validates: Requirements 6.1, 6.2**
 *
 * For any interactive component (Button, Checkbox, Select, Dialog, etc.),
 * when rendered, the component SHALL include all required ARIA attributes for its role.
 */
describe('ARIA Compliance', () => {
  describe('Button ARIA', () => {
    it('should have button role', () => {
      render(<Button>Click me</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should have aria-disabled when disabled', () => {
      fc.assert(
        fc.property(fc.boolean(), (disabled) => {
          const { unmount } = render(<Button disabled={disabled}>Button</Button>);
          const button = screen.getByRole('button');

          if (disabled) {
            expect(button).toBeDisabled();
          } else {
            expect(button).not.toBeDisabled();
          }

          unmount();
        }),
        { numRuns: 50 }
      );
    });

    it('should have aria-busy when loading', () => {
      fc.assert(
        fc.property(fc.boolean(), (loading) => {
          const { unmount } = render(<Button loading={loading}>Button</Button>);
          const button = screen.getByRole('button');

          if (loading) {
            expect(button).toHaveAttribute('aria-busy', 'true');
          } else {
            expect(button).not.toHaveAttribute('aria-busy');
          }

          unmount();
        }),
        { numRuns: 50 }
      );
    });
  });

  describe('Checkbox ARIA', () => {
    it('should have checkbox role', () => {
      render(<Checkbox />);
      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('should have aria-checked attribute', () => {
      fc.assert(
        fc.property(fc.boolean(), (checked) => {
          const { unmount } = render(<Checkbox checked={checked} />);
          const checkbox = screen.getByRole('checkbox');

          if (checked) {
            expect(checkbox).toHaveAttribute('aria-checked', 'true');
          } else {
            expect(checkbox).toHaveAttribute('aria-checked', 'false');
          }

          unmount();
        }),
        { numRuns: 50 }
      );
    });
  });

  describe('Alert ARIA', () => {
    it('should have alert role', () => {
      fc.assert(
        fc.property(
          fc.constantFrom('info', 'success', 'warning', 'error'),
          (status) => {
            const { unmount } = render(<Alert status={status}>Alert message</Alert>);
            expect(screen.getByRole('alert')).toBeInTheDocument();
            unmount();
          }
        ),
        { numRuns: 50 }
      );
    });
  });

  describe('Toast ARIA', () => {
    it('should have status role for non-error statuses', () => {
      fc.assert(
        fc.property(fc.constantFrom('default', 'success', 'warning'), (status) => {
          const { unmount } = render(<Toast status={status}>Toast message</Toast>);
          expect(screen.getByRole('status')).toBeInTheDocument();
          unmount();
        }),
        { numRuns: 50 }
      );
    });

    it('should have aria-live="polite" for non-error statuses', () => {
      render(<Toast>Toast message</Toast>);
      expect(screen.getByRole('status')).toHaveAttribute('aria-live', 'polite');
    });
  });

  /**
   * **Feature: code-review-engine, Property 6: Toast Role Based on Status**
   * **Validates: Requirements 6.2**
   *
   * For any Toast component with status="error", the component SHALL use role="alert",
   * and for other statuses SHALL use role="status".
   */
  describe('Toast Role Based on Status', () => {
    it('should use role="alert" for error status', () => {
      render(<Toast status="error">Error message</Toast>);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('should use aria-live="assertive" for error status', () => {
      render(<Toast status="error">Error message</Toast>);
      expect(screen.getByRole('alert')).toHaveAttribute('aria-live', 'assertive');
    });

    it('should use role="status" for non-error statuses', () => {
      fc.assert(
        fc.property(fc.constantFrom('default', 'success', 'warning'), (status) => {
          const { unmount } = render(<Toast status={status}>Message</Toast>);
          expect(screen.getByRole('status')).toBeInTheDocument();
          expect(screen.getByRole('status')).toHaveAttribute('aria-live', 'polite');
          unmount();
        }),
        { numRuns: 50 }
      );
    });
  });
});
