import * as React from 'react';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  /** Icon size (width and height) */
  size?: number | string;
  /** Icon color */
  color?: string;
  /** Accessible label for the icon */
  'aria-label'?: string;
}
