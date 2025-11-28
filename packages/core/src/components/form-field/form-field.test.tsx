import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import fc from 'fast-check';
import { FormField } from './form-field';
import { Input } from '../input';

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
});
