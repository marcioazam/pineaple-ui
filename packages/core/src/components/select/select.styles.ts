import { cva, type VariantProps } from 'class-variance-authority';

export const selectTriggerVariants = cva(
  [
    'flex h-10 w-full items-center justify-between rounded-lg border px-3 py-2 text-sm',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:cursor-not-allowed disabled:opacity-50',
    '[&>span]:line-clamp-1',
  ],
  {
    variants: {
      variant: {
        default: 'border-neutral-300 bg-neutral-50 focus:ring-primary-500',
        error: 'border-danger-500 bg-neutral-50 focus:ring-danger-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const selectContentVariants = cva([
  'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-lg border bg-neutral-50 shadow-md',
  'data-[state=open]:animate-in data-[state=closed]:animate-out',
  'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
  'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
  'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
]);

export const selectItemVariants = cva([
  'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm',
  'outline-none focus:bg-neutral-100 focus:text-neutral-900',
  'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
]);

export type SelectTriggerVariants = VariantProps<typeof selectTriggerVariants>;
export type SelectContentVariants = VariantProps<typeof selectContentVariants>;
export type SelectItemVariants = VariantProps<typeof selectItemVariants>;
