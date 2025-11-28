import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Textarea variant styles using CVA
 */
export const textareaVariants = cva(
  [
    'flex w-full rounded-lg border bg-transparent px-3 py-2',
    'text-base transition-colors resize-y min-h-[80px]',
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
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export type TextareaVariants = VariantProps<typeof textareaVariants>;
