import { cva, type VariantProps } from 'class-variance-authority';

/**
 * Button variant styles using CVA
 */
export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center',
    'font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500',
        secondary:
          'bg-secondary-100 text-secondary-900 hover:bg-secondary-200 focus-visible:ring-secondary-500',
        outline:
          'border border-neutral-300 bg-transparent hover:bg-neutral-100 focus-visible:ring-neutral-500',
        ghost: 'bg-transparent hover:bg-neutral-100 focus-visible:ring-neutral-500',
        danger: 'bg-danger-500 text-white hover:bg-danger-600 focus-visible:ring-danger-500',
      },
      size: {
        sm: 'h-8 px-3 text-sm rounded-md gap-1.5',
        md: 'h-10 px-4 text-base rounded-lg gap-2',
        lg: 'h-12 px-6 text-lg rounded-lg gap-2.5',
      },
    },
    compoundVariants: [
      {
        variant: 'outline',
        size: 'sm',
        className: 'border',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
