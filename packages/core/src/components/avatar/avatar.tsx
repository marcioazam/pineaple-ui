import * as React from 'react';
import { cn } from '@pineapple-ui/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const avatarVariants = cva(
  'relative flex shrink-0 overflow-hidden rounded-full bg-neutral-100',
  {
    variants: {
      size: {
        sm: 'h-8 w-8 text-xs',
        md: 'h-10 w-10 text-sm',
        lg: 'h-12 w-12 text-base',
        xl: 'h-16 w-16 text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {
  /** Image source */
  src?: string;
  /** Alt text for image */
  alt?: string;
  /** Fallback initials */
  initials?: string;
}

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, size, src, alt, initials, ...props }, ref) => {
    const [imageError, setImageError] = React.useState(false);

    return (
      <span ref={ref} className={cn(avatarVariants({ size }), className)} {...props}>
        {src && !imageError ? (
          <img
            src={src}
            alt={alt || ''}
            className="aspect-square h-full w-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : initials ? (
          <span className="flex h-full w-full items-center justify-center font-medium text-neutral-600">
            {initials.slice(0, 2).toUpperCase()}
          </span>
        ) : (
          <svg className="h-full w-full text-neutral-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </span>
    );
  }
);

Avatar.displayName = 'Avatar';
