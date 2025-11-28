import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import fc from 'fast-check';
import { FormField } from './form-field';
import { Input } from '../input';
import { InvalidPropError } from '@pineapple-ui/utils';

describe('FormField Component', () => {
  /**
   * **Feature: pineapple-ui, Property 10: Error State Association**
   * **Validates: Requirements 12.3**
   *
   * For any form component with an error message,
   * the input element's aria-describedby SHALL reference the error message element's id.
   */
  it('should link error message to input via aria-describedby', () => {
    const errorMessages = ['Invalid email', 'Required field', 'Too short', 'Invalid format'];

    fc.assert(
      fc.property(fc.constantFrom(...errorMessages), (errorMsg) => {
        const { unmount } = render(
          <FormField id="test-field" label="Test" error={errorMsg}>
            <Input />
          </FormField>
        );

        const input = screen.getByRole('textbox');
        const errorElement = screen.getByRole('alert');

        // Verify aria-describedby references the error element
        expect(input).toHaveAttribute('aria-describedby', expect.stringContaining('test-field-error'));
        expect(errorElement).toHaveAttribute('id', 'test-field-error');
        expect(errorElement).toHaveTextContent(errorMsg);

        unmount();
      }),
      { numRuns: 100 }
    );
  });

  it('should render label with required indicator', () => {
    render(
      <FormField label="Email" required>
        <Input />
      </FormField>
    );

    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('should render helper text when no error', () => {
    render(
      <FormField label="Name" helperText="Enter your full name">
        <Input />
      </FormField>
    );

    expect(screen.getByText('Enter your full name')).toBeInTheDocument();
  });

  it('should hide helper text when error is present', () => {
    render(
      <FormField label="Name" helperText="Enter your full name" error="Name is required">
        <Input />
      </FormField>
    );

    expect(screen.queryByText('Enter your full name')).not.toBeInTheDocument();
    expect(screen.getByText('Name is required')).toBeInTheDocument();
  });

  it('should pass error prop to child input', () => {
    render(
      <FormField label="Email" error="Invalid email">
        <Input data-testid="input" />
      </FormField>
    );

    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  /**
   * **Feature: code-review-engine, Property 4: FormField Props Injection**
   * **Validates: Requirements 5.2**
   *
   * For any valid React element passed as children to FormField,
   * the cloned element SHALL receive the injected props (id, aria-describedby, aria-invalid, required, error)
   * without runtime errors.
   */
  it('should inject props into any valid React element child', () => {
    fc.assert(
      fc.property(
        fc.boolean(), // hasError
        fc.boolean(), // hasHelperText
        fc.boolean(), // isRequired
        (hasError, hasHelperText, isRequired) => {
          const error = hasError ? 'Error message' : undefined;
          const helperText = hasHelperText ? 'Helper text' : undefined;

          const { container, unmount } = render(
            <FormField
              id="test-id"
              label="Test Label"
              error={error}
              helperText={helperText}
              required={isRequired}
            >
              <Input data-testid="child-input" />
            </FormField>
          );

          const input = container.querySelector('[data-testid="child-input"]') as HTMLElement;

          // Should always have id injected
          expect(input).toHaveAttribute('id', 'test-id');

          // Should have aria-invalid when error is present
          if (hasError) {
            expect(input).toHaveAttribute('aria-invalid', 'true');
            expect(input).toHaveAttribute('aria-describedby', expect.stringContaining('test-id-error'));
          }

          // Should have aria-describedby for helper text when no error
          if (hasHelperText && !hasError) {
            expect(input).toHaveAttribute('aria-describedby', expect.stringContaining('test-id-helper'));
          }

          unmount();
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * **Feature: code-review-engine, Property 7: Error Class Usage**
   * **Validates: Requirements 11.1, 11.2**
   *
   * For any invalid children passed to FormField,
   * the component SHALL throw an InvalidPropError with proper context.
   */
  it('should throw InvalidPropError for invalid children', () => {
    // Suppress console.error for this test since we expect an error
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => {
      render(
        <FormField label="Test">
          {/* @ts-expect-error - Testing invalid children */}
          {'string is not a valid element'}
        </FormField>
      );
    }).toThrow(InvalidPropError);

    consoleSpy.mockRestore();
  });
});
