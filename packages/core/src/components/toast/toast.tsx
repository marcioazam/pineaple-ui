import * as React from 'react';
import { cn } from '@pineapple-ui/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const toastVariants = cva(
  [
    'pointer-events-auto relative flex w-full items-center justify-between space-x-4',
    'overflow-hidden rounded-lg border p-4 shadow-lg transition-all',
  ],
  {
    variants: {
      status: {
        default: 'bg-white border-neutral-200',
        success: 'bg-success-50 border-success-200 text-success-800',
        warning: 'bg-warning-50 border-warning-200 text-warning-800',
        error: 'bg-danger-50 border-danger-200 text-danger-800',
      },
    },
    defaultVariants: {
      status: 'default',
    },
  }
);

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
  /** Auto-dismiss duration in ms (0 to disable) */
  duration?: number;
  /** Callback when toast should be dismissed */
  onDismiss?: () => void;
}

/**
 * Toast component for displaying temporary notifications.
 *
 * @example
 * ```tsx
 * <Toast status="success" onDismiss={() => {}}>
 *   <ToastTitle>Success!</ToastTitle>
 *   <ToastDescription>Your changes have been saved.</ToastDescription>
 * </Toast>
 * ```
 */
export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, status, duration = 5000, onDismiss, children, ...props }, ref) => {
    React.useEffect(() => {
      if (duration > 0 && onDismiss) {
        const timer = setTimeout(onDismiss, duration);
        return () => clearTimeout(timer);
      }
      return undefined;
    }, [duration, onDismiss]);

    return (
      <div
        ref={ref}
        role="status"
        aria-live="polite"
        className={cn(toastVariants({ status }), className)}
        {...props}
      >
        <div className="flex-1">{children}</div>
        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            className="rounded-md p-1 opacity-70 hover:opacity-100 focus:outline-none focus:ring-2"
            aria-label="Dismiss"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Toast.displayName = 'Toast';

export const ToastTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn('font-medium', className)} {...props} />
));

ToastTitle.displayName = 'ToastTitle';

export const ToastDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm opacity-90', className)} {...props} />
));

ToastDescription.displayName = 'ToastDescription';
