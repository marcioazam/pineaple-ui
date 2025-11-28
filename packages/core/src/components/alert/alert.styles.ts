import { cva, type VariantProps } from 'class-variance-authority';

export const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4',
  {
    variants: {
      status: {
        info: 'bg-primary-50 border-primary-200 text-primary-800',
        success: 'bg-success-50 border-success-200 text-success-800',
        warning: 'bg-warning-50 border-warning-200 text-warning-800',
        error: 'bg-danger-50 border-danger-200 text-danger-800',
      },
    },
    defaultVariants: {
      status: 'info',
    },
  }
);

export type AlertVariants = VariantProps<typeof alertVariants>;
