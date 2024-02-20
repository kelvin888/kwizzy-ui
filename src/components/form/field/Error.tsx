import React from 'react';

import clsx from 'clsx';

interface ErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Error = React.forwardRef<HTMLDivElement, ErrorProps>(
  ({ children, className, ...props }, ref) => {
    if (!children) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={clsx(
          'flex select-none items-center gap-1 text-sm text-danger-100',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Error.displayName = "Input Error";

export default Error;
