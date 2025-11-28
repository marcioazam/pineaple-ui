/**
 * Select Primitive
 *
 * A dropdown select component for choosing from a list of options.
 * Built on Radix UI Select for full accessibility.
 *
 * @example
 * ```tsx
 * <Select.Root>
 *   <Select.Trigger>
 *     <Select.Value placeholder="Select..." />
 *   </Select.Trigger>
 *   <Select.Portal>
 *     <Select.Content>
 *       <Select.Viewport>
 *         <Select.Item value="1">Option 1</Select.Item>
 *         <Select.Item value="2">Option 2</Select.Item>
 *       </Select.Viewport>
 *     </Select.Content>
 *   </Select.Portal>
 * </Select.Root>
 * ```
 */
import * as SelectPrimitive from '@radix-ui/react-select';

/**
 * Root component that manages select state
 */
export const Root = SelectPrimitive.Root;

/**
 * Button that toggles the select
 */
export const Trigger = SelectPrimitive.Trigger;

/**
 * Displays the selected value
 */
export const Value = SelectPrimitive.Value;

/**
 * Icon displayed in the trigger
 */
export const Icon = SelectPrimitive.Icon;

/**
 * Portal for rendering select outside the DOM hierarchy
 */
export const Portal = SelectPrimitive.Portal;

/**
 * Contains the select options
 */
export const Content = SelectPrimitive.Content;

/**
 * Scrollable viewport containing items
 */
export const Viewport = SelectPrimitive.Viewport;

/**
 * Individual select option
 */
export const Item = SelectPrimitive.Item;

/**
 * Text content of an item
 */
export const ItemText = SelectPrimitive.ItemText;

/**
 * Indicator for selected item
 */
export const ItemIndicator = SelectPrimitive.ItemIndicator;

/**
 * Group of related items
 */
export const Group = SelectPrimitive.Group;

/**
 * Label for a group of items
 */
export const Label = SelectPrimitive.Label;

/**
 * Visual separator between items
 */
export const Separator = SelectPrimitive.Separator;

/**
 * Scroll up button
 */
export const ScrollUpButton = SelectPrimitive.ScrollUpButton;

/**
 * Scroll down button
 */
export const ScrollDownButton = SelectPrimitive.ScrollDownButton;

// Re-export types
export type {
  SelectProps as RootProps,
  SelectTriggerProps as TriggerProps,
  SelectValueProps as ValueProps,
  SelectIconProps as IconProps,
  SelectPortalProps as PortalProps,
  SelectContentProps as ContentProps,
  SelectViewportProps as ViewportProps,
  SelectItemProps as ItemProps,
  SelectItemTextProps as ItemTextProps,
  SelectItemIndicatorProps as ItemIndicatorProps,
  SelectGroupProps as GroupProps,
  SelectLabelProps as LabelProps,
  SelectSeparatorProps as SeparatorProps,
  SelectScrollUpButtonProps as ScrollUpButtonProps,
  SelectScrollDownButtonProps as ScrollDownButtonProps,
} from '@radix-ui/react-select';
