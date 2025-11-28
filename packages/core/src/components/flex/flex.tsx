import * as React from 'react';
import { cn } from '@pineapple-ui/utils';
import { flexVariants, type FlexVariants } from './flex.styles';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement>, FlexVariants {}

/**
 * Flex is a layout component for creating flexbox layouts.
 *
 * @example
 * ```tsx
 * <Flex direction="row" align="center" justify="between" gap={4}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Flex>
 * ```
 */
export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ className, direction, align, justify, wrap, gap, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(flexVariants({ direction, align, justify, wrap, gap }), className)}
      {...props}
    />
  )
);

Flex.displayName = 'Flex';
