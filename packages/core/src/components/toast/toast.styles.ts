import { cva, type VariantProps } from 'class-variance-authority';

export const toastVariants = cva(
  [
    'pointer-events-auto relative flex w-full items-center justify-between space-x-4',
    'overflow-hidden rounded-lg border p-4 shadow-lg transition-all',
  ],
  {
    variants: {
      status: {
        default: 'bg-neutral-50 border-neutral-200',
        success: 'bg-success-50 border-success-200 text-success-800',
        warning: 'bg-warning-50 border-warning-200 text-warning-800',
        error: 'bg-danger-50 border-danger-200 text-danger-800',
      },
    },
    defaultVariants: {
      status: 'default',
    },
  }
);

export type ToastVariants = VariantProps<typeof toastVariants>;
