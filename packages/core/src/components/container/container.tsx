import * as React from 'react';
import { cn } from '@pineapple-ui/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const containerVariants = cva('w-full mx-auto px-4', {
  variants: {
    size: {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      full: 'max-w-full',
    },
    centered: {
      true: 'flex flex-col items-center',
      false: '',
    },
  },
  defaultVariants: {
    size: 'xl',
    centered: false,
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

/**
 * Container is a layout component for constraining content width.
 *
 * @example
 * ```tsx
 * <Container size="lg">
 *   <p>Centered content with max-width</p>
 * </Container>
 * ```
 */
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, centered, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(containerVariants({ size, centered }), className)}
      {...props}
    />
  )
);

Container.displayName = 'Container';
