import * as React from 'react';
import { cn } from '@pineapple-ui/utils';

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /** Custom separator between items */
  separator?: React.ReactNode;
}

/**
 * Breadcrumb navigation component.
 *
 * @example
 * ```tsx
 * <Breadcrumb>
 *   <BreadcrumbItem href="/">Home</BreadcrumbItem>
 *   <BreadcrumbItem href="/products">Products</BreadcrumbItem>
 *   <BreadcrumbItem current>Details</BreadcrumbItem>
 * </Breadcrumb>
 * ```
 */
export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, separator = '/', children, ...props }, ref) => {
    const childArray = React.Children.toArray(children).filter(Boolean);

    return (
      <nav ref={ref} aria-label="Breadcrumb" className={cn('flex', className)} {...props}>
        <ol className="flex items-center gap-2">
          {childArray.map((child, index) => (
            <React.Fragment key={index}>
              <li className="flex items-center">{child}</li>
              {index < childArray.length - 1 && (
                <li aria-hidden="true" className="text-neutral-400">
                  {separator}
                </li>
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';

export interface BreadcrumbItemProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Link href */
  href?: string;
  /** Whether this is the current page */
  current?: boolean;
}

export const BreadcrumbItem = React.forwardRef<HTMLSpanElement, BreadcrumbItemProps>(
  ({ className, href, current, children, ...props }, ref) => {
    const baseClasses = cn(
      'text-sm',
      current ? 'font-medium text-neutral-900' : 'text-neutral-500 hover:text-neutral-700',
      className
    );

    if (href && !current) {
      return (
        <a href={href} className={baseClasses}>
          {children}
        </a>
      );
    }

    return (
      <span
        ref={ref}
        aria-current={current ? 'page' : undefined}
        className={baseClasses}
        {...props}
      >
        {children}
      </span>
    );
  }
);

BreadcrumbItem.displayName = 'BreadcrumbItem';
