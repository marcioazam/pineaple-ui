import * as React from 'react';
import { cn } from '@pineapple-ui/utils';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The element type to render */
  as?: React.ElementType;
}

/**
 * Box is a layout primitive that serves as the foundation for other layout components.
 *
 * @example
 * ```tsx
 * <Box className="p-4">Content</Box>
 * <Box as="section" className="bg-white rounded-lg">Section</Box>
 * ```
 */
export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ as: Component = 'div', className, children, ...props }, ref) => {
    return (
      <Component ref={ref} className={cn(className)} {...props}>
        {children}
      </Component>
    );
  }
);

Box.displayName = 'Box';
