import * as React from 'react';
import type { IconProps } from './types';

/**
 * Factory function to create icon components from SVG paths.
 *
 * @param displayName - The display name for the icon component
 * @param path - The SVG path element(s)
 * @returns A React component that renders the icon
 *
 * @example
 * ```tsx
 * const CheckIcon = createIcon('CheckIcon', <path d="M20 6L9 17l-5-5" />);
 * ```
 */
export function createIcon(
  displayName: string,
  path: React.ReactNode
): React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>> {
  const Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({ size = 24, color = 'currentColor', 'aria-label': ariaLabel, className, ...props }, ref) => {
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
          {path}
        </svg>
      );
    }
  );

  Icon.displayName = displayName;
  return Icon;
}
