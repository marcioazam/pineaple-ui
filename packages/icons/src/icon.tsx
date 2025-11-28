import * as React from 'react';
import type { IconProps } from './types';

export interface CustomIconProps extends IconProps {
  /** Custom SVG content */
  children: React.ReactNode;
}

/**
 * Icon wrapper component for custom SVG content.
 *
 * @example
 * ```tsx
 * <Icon aria-label="Custom icon">
 *   <path d="M12 2L2 7l10 5 10-5-10-5z" />
 * </Icon>
 * ```
 */
export const Icon = React.forwardRef<SVGSVGElement, CustomIconProps>(
  ({ size = 24, color = 'currentColor', 'aria-label': ariaLabel, children, className, ...props }, ref) => {
    const isDecorative = !ariaLabel;

    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden={isDecorative}
        aria-label={ariaLabel}
        role={isDecorative ? undefined : 'img'}
        className={className}
        {...props}
      >
        {children}
      </svg>
    );
  }
);

Icon.displayName = 'Icon';
