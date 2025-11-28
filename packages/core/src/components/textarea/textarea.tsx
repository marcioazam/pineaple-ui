import * as React from 'react';
import { cn } from '@pineapple-ui/utils';
import { textareaVariants, type TextareaVariants } from './textarea.styles';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    TextareaVariants {
  /** Error state for validation */
  error?: boolean;
}

/**
 * Textarea component with variants and error state support.
 *
 * @example
 * ```tsx
 * <Textarea placeholder="Enter description" />
 * <Textarea error aria-describedby="error-msg" />
 * ```
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, error, disabled, required, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(textareaVariants({ variant: error ? 'error' : variant }), className)}
        disabled={disabled}
        aria-required={required || undefined}
        aria-invalid={error || undefined}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
