import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { cn } from '@pineapple-ui/utils';

const MenuRoot = DropdownMenuPrimitive.Root;
(MenuRoot as { displayName?: string }).displayName = 'Menu';
export { MenuRoot as Menu };

const MenuTriggerPrimitive = DropdownMenuPrimitive.Trigger;
(MenuTriggerPrimitive as { displayName?: string }).displayName = 'MenuTrigger';
export { MenuTriggerPrimitive as MenuTrigger };

const MenuGroupPrimitive = DropdownMenuPrimitive.Group;
(MenuGroupPrimitive as { displayName?: string }).displayName = 'MenuGroup';
export { MenuGroupPrimitive as MenuGroup };

const MenuPortalPrimitive = DropdownMenuPrimitive.Portal;
(MenuPortalPrimitive as { displayName?: string }).displayName = 'MenuPortal';
export { MenuPortalPrimitive as MenuPortal };

const MenuSubPrimitive = DropdownMenuPrimitive.Sub;
(MenuSubPrimitive as { displayName?: string }).displayName = 'MenuSub';
export { MenuSubPrimitive as MenuSub };

const MenuRadioGroupPrimitive = DropdownMenuPrimitive.RadioGroup;
(MenuRadioGroupPrimitive as { displayName?: string }).displayName = 'MenuRadioGroup';
export { MenuRadioGroupPrimitive as MenuRadioGroup };

export const MenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & { inset?: boolean }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
      'focus:bg-neutral-100 data-[state=open]:bg-neutral-100',
      inset && 'pl-8',
      className
    )}
    {...props}
  >
    {children}
    <svg className="ml-auto h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </DropdownMenuPrimitive.SubTrigger>
));

MenuSubTrigger.displayName = 'MenuSubTrigger';

export const MenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 shadow-lg',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      className
    )}
    {...props}
  />
));

MenuSubContent.displayName = 'MenuSubContent';

export const MenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 shadow-md',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        className
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));

MenuContent.displayName = 'MenuContent';

export const MenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & { inset?: boolean }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
      'transition-colors focus:bg-neutral-100 focus:text-neutral-900',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      className
    )}
    {...props}
  />
));

MenuItem.displayName = 'MenuItem';

export const MenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-neutral-200', className)}
    {...props}
  />
));

MenuSeparator.displayName = 'MenuSeparator';

export const MenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & { inset?: boolean }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn('px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
    {...props}
  />
));

MenuLabel.displayName = 'MenuLabel';
