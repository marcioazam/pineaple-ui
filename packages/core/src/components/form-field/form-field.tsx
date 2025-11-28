import * as React from 'react';
import { cn, InvalidPropError } from '@pineapple-ui/utils';

export interface FormFieldProps {
  /** Unique ID for the form field */
  id?: string;
  /** Label text */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Additional class names */
  className?: string;
  /** Form control element */
  children: React.ReactElement;
}

/**
 * FormField wrapper component with Label, Input, and ErrorMessage slots.
 * Implements aria-describedby linking for errors.
 *
 * @example
 * ```tsx
 * <FormField label="Email" error="Invalid email" required>
 *   <Input type="email" />
 * </FormField>
 * ```
 */
export function FormField({
  id: providedId,
  label,
  error,
  helperText,
  required,
  className,
  children,
}: FormFieldProps) {
  const generatedId = React.useId();
  const id = providedId ?? generatedId;
  const errorId = `${id}-error`;
  const helperId = `${id}-helper`;

  const describedBy =
    [error ? errorId : null, helperText ? helperId : null].filter(Boolean).join(' ') || undefined;

  // Validate that children is a valid React element
  if (!React.isValidElement(children)) {
    throw new InvalidPropError('FormField', 'children', 'valid React element', children);
  }

  // Type-safe props to inject into child
  interface InjectedProps {
    id: string;
    'aria-describedby'?: string | undefined;
    'aria-invalid'?: boolean | undefined;
    required?: boolean | undefined;
    error?: boolean | undefined;
  }

  const injectedProps: InjectedProps = {
    id,
    'aria-describedby': describedBy,
    'aria-invalid': error ? true : undefined,
    required,
    error: !!error,
  };

  // Clone child with additional props (type-safe)
  const childWithProps = React.cloneElement(
    children as React.ReactElement<InjectedProps>,
    injectedProps
  );

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-neutral-700">
          {label}
          {required && <span className="text-danger-500 ml-1">*</span>}
        </label>
      )}
      {childWithProps}
      {error && (
        <p id={errorId} className="text-sm text-danger-500" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={helperId} className="text-sm text-neutral-500">
          {helperText}
        </p>
      )}
    </div>
  );
}

FormField.displayName = 'FormField';
