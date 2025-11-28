/**
 * Menu Primitive
 *
 * A dropdown menu component with keyboard navigation support.
 * Built on Radix UI DropdownMenu for full accessibility.
 *
 * @example
 * ```tsx
 * <Menu.Root>
 *   <Menu.Trigger>Options</Menu.Trigger>
 *   <Menu.Portal>
 *     <Menu.Content>
 *       <Menu.Item>Edit</Menu.Item>
 *       <Menu.Item>Delete</Menu.Item>
 *       <Menu.Separator />
 *       <Menu.Item>Settings</Menu.Item>
 *     </Menu.Content>
 *   </Menu.Portal>
 * </Menu.Root>
 * ```
 */
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

/**
 * Root component that manages menu state
 */
export const Root = DropdownMenuPrimitive.Root;

/**
 * Button that toggles the menu
 */
export const Trigger = DropdownMenuPrimitive.Trigger;

/**
 * Portal for rendering menu outside the DOM hierarchy
 */
export const Portal = DropdownMenuPrimitive.Portal;

/**
 * Contains the menu items
 */
export const Content = DropdownMenuPrimitive.Content;

/**
 * Individual menu item
 */
export const Item = DropdownMenuPrimitive.Item;

/**
 * Visual separator between menu items
 */
export const Separator = DropdownMenuPrimitive.Separator;

/**
 * Group of related menu items
 */
export const Group = DropdownMenuPrimitive.Group;

/**
 * Label for a group of menu items
 */
export const Label = DropdownMenuPrimitive.Label;

/**
 * Checkable menu item
 */
export const CheckboxItem = DropdownMenuPrimitive.CheckboxItem;

/**
 * Indicator for checkbox item checked state
 */
export const ItemIndicator = DropdownMenuPrimitive.ItemIndicator;

/**
 * Group of radio menu items
 */
export const RadioGroup = DropdownMenuPrimitive.RadioGroup;

/**
 * Radio menu item
 */
export const RadioItem = DropdownMenuPrimitive.RadioItem;

/**
 * Submenu root
 */
export const Sub = DropdownMenuPrimitive.Sub;

/**
 * Submenu trigger
 */
export const SubTrigger = DropdownMenuPrimitive.SubTrigger;

/**
 * Submenu content
 */
export const SubContent = DropdownMenuPrimitive.SubContent;

// Re-export types
export type {
  DropdownMenuProps as RootProps,
  DropdownMenuTriggerProps as TriggerProps,
  DropdownMenuPortalProps as PortalProps,
  DropdownMenuContentProps as ContentProps,
  DropdownMenuItemProps as ItemProps,
  DropdownMenuSeparatorProps as SeparatorProps,
  DropdownMenuGroupProps as GroupProps,
  DropdownMenuLabelProps as LabelProps,
  DropdownMenuCheckboxItemProps as CheckboxItemProps,
  DropdownMenuItemIndicatorProps as ItemIndicatorProps,
  DropdownMenuRadioGroupProps as RadioGroupProps,
  DropdownMenuRadioItemProps as RadioItemProps,
  DropdownMenuSubProps as SubProps,
  DropdownMenuSubTriggerProps as SubTriggerProps,
  DropdownMenuSubContentProps as SubContentProps,
} from '@radix-ui/react-dropdown-menu';
