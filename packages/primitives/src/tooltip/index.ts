/**
 * Tooltip Primitive
 *
 * A popup that displays information related to an element
 * when the element receives keyboard focus or mouse hover.
 * Built on Radix UI Tooltip for full accessibility.
 *
 * @example
 * ```tsx
 * <Tooltip.Provider>
 *   <Tooltip.Root>
 *     <Tooltip.Trigger>Hover me</Tooltip.Trigger>
 *     <Tooltip.Portal>
 *       <Tooltip.Content>
 *         Tooltip content
 *         <Tooltip.Arrow />
 *       </Tooltip.Content>
 *     </Tooltip.Portal>
 *   </Tooltip.Root>
 * </Tooltip.Provider>
 * ```
 */
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

/**
 * Wraps your app to provide global tooltip functionality
 */
export const Provider = TooltipPrimitive.Provider;

/**
 * Root component that manages tooltip state
 */
export const Root = TooltipPrimitive.Root;

/**
 * Element that triggers the tooltip
 */
export const Trigger = TooltipPrimitive.Trigger;

/**
 * Portal for rendering tooltip outside the DOM hierarchy
 */
export const Portal = TooltipPrimitive.Portal;

/**
 * Contains the tooltip content
 */
export const Content = TooltipPrimitive.Content;

/**
 * Optional arrow pointing to the trigger
 */
export const Arrow = TooltipPrimitive.Arrow;

// Re-export types
export type {
  TooltipProviderProps as ProviderProps,
  TooltipProps as RootProps,
  TooltipTriggerProps as TriggerProps,
  TooltipPortalProps as PortalProps,
  TooltipContentProps as ContentProps,
  TooltipArrowProps as ArrowProps,
} from '@radix-ui/react-tooltip';
