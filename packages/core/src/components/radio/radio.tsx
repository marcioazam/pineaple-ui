import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '@pineapple-ui/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const radioGroupVariants = cva('grid gap-2', {
  variants: {
    orientation: {
      vertical: 'grid-flow-row',
      horizontal: 'grid-flow-col',
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

const radioItemVariants = cva(
  [
    'aspect-square h-5 w-5 rounded-full border',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: 'border-neutral-300 text-primary-500 focus-visible:ring-primary-500',
        error: 'border-danger-500 text-danger-500 focus-visible:ring-danger-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface RadioGroupProps
  extends Omit<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>, 'orientation'>,
    VariantProps<typeof radioGroupVariants> {
  /** Error state */
  error?: boolean;
}

/**
 * RadioGroup component for selecting one option from a set.
 *
 * @example
 * ```tsx
 * <RadioGroup defaultValue="option1">
 *   <Radio value="option1" />
 *   <Radio value="option2" />
 * </RadioGroup>
 * ```
 */
export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, orientation, ...props }, ref) => (
  <RadioGroupPrimitive.Root
    ref={ref}
    className={cn(radioGroupVariants({ orientation }), className)}
    {...props}
  />
));

RadioGroup.displayName = 'RadioGroup';

export interface RadioProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioItemVariants> {
  /** Error state */
  error?: boolean;
}

/**
 * Radio component for individual radio options.
 * Must be used within a RadioGroup.
 *
 * @example
 * ```tsx
 * <Radio value="option1" />
 * ```
 */
export const Radio = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioProps
>(({ className, variant, error, ...props }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(radioItemVariants({ variant: error ? 'error' : variant }), className)}
    {...props}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <span className="h-2.5 w-2.5 rounded-full bg-current" />
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));

Radio.displayName = 'Radio';
