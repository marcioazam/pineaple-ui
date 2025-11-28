import { cva, type VariantProps } from 'class-variance-authority';

export const cardVariants = cva('rounded-lg', {
  variants: {
    variant: {
      elevated: 'bg-neutral-50 shadow-md',
      outlined: 'bg-neutral-50 border border-neutral-200',
      filled: 'bg-neutral-100',
    },
  },
  defaultVariants: {
    variant: 'elevated',
  },
});

export type CardVariants = VariantProps<typeof cardVariants>;
