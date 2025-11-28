import * as React from 'react';
import { cn } from '@pineapple-ui/utils';
import { alertVariants, type AlertVariants } from './alert.styles';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, AlertVariants {}

/**
 * Alert component for displaying feedback messages.
 *
 * @example
 * ```tsx
 * <Alert status="success">
 *   <AlertTitle>Success!</AlertTitle>
 *   <AlertDescription>Your changes have been saved.</AlertDescription>
 * </Alert>
 * ```
 */
export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, status, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ status }), className)}
      {...props}
    />
  )
);

Alert.displayName = 'Alert';

export const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
));

AlertTitle.displayName = 'AlertTitle';

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('text-sm [&_p]:leading-relaxed', className)} {...props} />
));

AlertDescription.displayName = 'AlertDescription';
