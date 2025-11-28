/**
 * Dialog Primitive
 *
 * A modal dialog component that interrupts the user with important content
 * and expects a response. Built on Radix UI Dialog for full accessibility.
 *
 * @example
 * ```tsx
 * <Dialog.Root>
 *   <Dialog.Trigger>Open</Dialog.Trigger>
 *   <Dialog.Portal>
 *     <Dialog.Overlay />
 *     <Dialog.Content>
 *       <Dialog.Title>Dialog Title</Dialog.Title>
 *       <Dialog.Description>Dialog description</Dialog.Description>
 *       <Dialog.Close>Close</Dialog.Close>
 *     </Dialog.Content>
 *   </Dialog.Portal>
 * </Dialog.Root>
 * ```
 */
import * as DialogPrimitive from '@radix-ui/react-dialog';

/**
 * Root component that manages dialog state
 */
export const Root = DialogPrimitive.Root;

/**
 * Button that opens the dialog
 */
export const Trigger = DialogPrimitive.Trigger;

/**
 * Portal for rendering dialog outside the DOM hierarchy
 */
export const Portal = DialogPrimitive.Portal;

/**
 * Overlay that covers the inert portion of the view
 */
export const Overlay = DialogPrimitive.Overlay;

/**
 * Contains content to be rendered in the open dialog
 */
export const Content = DialogPrimitive.Content;

/**
 * Accessible title announced when dialog opens
 */
export const Title = DialogPrimitive.Title;

/**
 * Optional accessible description announced when dialog opens
 */
export const Description = DialogPrimitive.Description;

/**
 * Button that closes the dialog
 */
export const Close = DialogPrimitive.Close;

// Re-export types
export type {
  DialogProps as RootProps,
  DialogTriggerProps as TriggerProps,
  DialogPortalProps as PortalProps,
  DialogOverlayProps as OverlayProps,
  DialogContentProps as ContentProps,
  DialogTitleProps as TitleProps,
  DialogDescriptionProps as DescriptionProps,
  DialogCloseProps as CloseProps,
} from '@radix-ui/react-dialog';
