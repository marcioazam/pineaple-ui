import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Input variant styles using CVA
 */
export const inputVariants = cva(
  [
    'flex w-full rounded-lg border bg-transparent px-3 py-2',
    'text-base transition-colors',
    'placeholder:text-neutral-400',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        default: 'border-neutral-300 focus-visible:ring-primary-500',
        error: 'border-danger-500 focus-visible:ring-danger-500',
      },
      inputSize: {
        sm: 'h-8 text-sm px-2',
        md: 'h-10 text-base px-3',
        lg: 'h-12 text-lg px-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
    },
  }
);

export type InputVariants = VariantProps<typeof inputVariants>;
