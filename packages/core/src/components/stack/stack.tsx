import * as React from 'react';
import { cn } from '@pineapple-ui/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const stackVariants = cva('flex', {
  variants: {
    direction: {
      vertical: 'flex-col',
      horizontal: 'flex-row',
    },
    gap: {
      0: 'gap-0',
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-5',
      6: 'gap-6',
      8: 'gap-8',
      10: 'gap-10',
      12: 'gap-12',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },
  },
  defaultVariants: {
    direction: 'vertical',
    gap: 4,
    align: 'stretch',
  },
});

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {
  /** Optional divider element between items */
  divider?: React.ReactNode;
}

/**
 * Stack is a layout component for stacking elements vertically or horizontally.
 *
 * @example
 * ```tsx
 * <Stack gap={4}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 * ```
 */
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction, gap, align, divider, children, ...props }, ref) => {
    const childArray = React.Children.toArray(children).filter(Boolean);

    return (
      <div
        ref={ref}
        className={cn(stackVariants({ direction, gap, align }), className)}
        {...props}
      >
        {divider
          ? childArray.map((child, index) => (
              <React.Fragment key={index}>
                {child}
                {index < childArray.length - 1 && divider}
              </React.Fragment>
            ))
          : children}
      </div>
    );
  }
);

Stack.displayName = 'Stack';
