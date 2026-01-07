import * as React from 'react';
import { cn } from '../../utils/cn';

export interface ChittyLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'text';
}

const ChittyLogo = React.forwardRef<HTMLDivElement, ChittyLogoProps>(
  ({ className, size = 'md', variant = 'full', ...props }, ref) => {
    const sizeClasses = {
      sm: 'h-6 text-sm',
      md: 'h-8 text-base',
      lg: 'h-12 text-lg',
      xl: 'h-16 text-xl'
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center gap-2 font-bold text-chitty-primary',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {(variant === 'full' || variant === 'icon') && (
          <div className={cn(
            'rounded-lg bg-gradient-to-br from-chitty-primary to-chitty-secondary flex items-center justify-center text-white font-black',
            size === 'sm' && 'w-6 h-6 text-xs',
            size === 'md' && 'w-8 h-8 text-sm',
            size === 'lg' && 'w-12 h-12 text-lg',
            size === 'xl' && 'w-16 h-16 text-xl'
          )}>
            C
          </div>
        )}
        {(variant === 'full' || variant === 'text') && (
          <span className="bg-gradient-to-r from-chitty-primary to-chitty-secondary bg-clip-text text-transparent">
            ChittyOS
          </span>
        )}
      </div>
    );
  }
);

ChittyLogo.displayName = 'ChittyLogo';

export { ChittyLogo };