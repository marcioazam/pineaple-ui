import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@pineapple-ui/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const tabsListVariants = cva('inline-flex items-center justify-center', {
  variants: {
    variant: {
      line: 'border-b border-neutral-200 gap-4',
      enclosed: 'rounded-lg bg-neutral-100 p-1 gap-1',
      soft: 'gap-2',
    },
  },
  defaultVariants: {
    variant: 'line',
  },
});

const tabsTriggerVariants = cva(
  [
    'inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium',
    'ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        line: [
          '-mb-px border-b-2 border-transparent',
          'data-[state=active]:border-primary-500 data-[state=active]:text-primary-600',
        ],
        enclosed: [
          'rounded-md',
          'data-[state=active]:bg-white data-[state=active]:shadow-sm',
        ],
        soft: [
          'rounded-md',
          'data-[state=active]:bg-primary-100 data-[state=active]:text-primary-700',
        ],
      },
    },
    defaultVariants: {
      variant: 'line',
    },
  }
);

export const Tabs = TabsPrimitive.Root;

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({ variant }), className)}
    {...props}
  />
));

TabsList.displayName = 'TabsList';

export interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, variant, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(tabsTriggerVariants({ variant }), className)}
    {...props}
  />
));

TabsTrigger.displayName = 'TabsTrigger';

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
));

TabsContent.displayName = 'TabsContent';
