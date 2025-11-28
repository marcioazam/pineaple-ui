import * as React from 'react';
import { cn } from '@pineapple-ui/utils';
import { inputVariants, type InputVariants } from './input.styles';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    InputVariants {
  /** Error state for validation */
  error?: boolean;
}

/**
 * Input component with variants and error state support.
 *
 * @example
 * ```tsx
 * <Input placeholder="Enter text" />
 * <Input error aria-describedby="error-msg" />
 * <Input inputSize="lg" />
 * ```
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, inputSize, error, disabled, required, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(inputVariants({ variant: error ? 'error' : variant, inputSize }), className)}
        disabled={disabled}
        aria-required={required || undefined}
        aria-invalid={error || undefined}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
