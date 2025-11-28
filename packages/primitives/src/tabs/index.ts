/**
 * Tabs Primitive
 *
 * A set of layered sections of content, known as tab panels,
 * that display one panel at a time. Built on Radix UI Tabs.
 *
 * @example
 * ```tsx
 * <Tabs.Root defaultValue="tab1">
 *   <Tabs.List>
 *     <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
 *     <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
 *   </Tabs.List>
 *   <Tabs.Content value="tab1">Content 1</Tabs.Content>
 *   <Tabs.Content value="tab2">Content 2</Tabs.Content>
 * </Tabs.Root>
 * ```
 */
import * as TabsPrimitive from '@radix-ui/react-tabs';

/**
 * Root component that manages tabs state
 */
export const Root = TabsPrimitive.Root;

/**
 * Container for tab triggers
 */
export const List = TabsPrimitive.List;

/**
 * Button that activates its associated content
 */
export const Trigger = TabsPrimitive.Trigger;

/**
 * Contains the content associated with each trigger
 */
export const Content = TabsPrimitive.Content;

// Re-export types
export type {
  TabsProps as RootProps,
  TabsListProps as ListProps,
  TabsTriggerProps as TriggerProps,
  TabsContentProps as ContentProps,
} from '@radix-ui/react-tabs';
