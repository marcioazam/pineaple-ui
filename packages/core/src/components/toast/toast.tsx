import * as React from 'react';
import { cn } from '@pineapple-ui/utils';
import { XIcon } from '@pineapple-ui/icons';
import { toastVariants, type ToastVariants } from './toast.styles';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement>, ToastVariants {
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

    // Use role="alert" for error status, role="status" for others
    const role = status === 'error' ? 'alert' : 'status';
    const ariaLive = status === 'error' ? 'assertive' : 'polite';

    return (
      <div
        ref={ref}
        role={role}
        aria-live={ariaLive}
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
            <XIcon size={16} />
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
