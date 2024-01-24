import React from 'react';

import clsx from 'clsx';

const Error = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  if (!children) {
    return null
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
      {/* <Icon icon={faExclamationCircle} /> */}
      {children}
    </div>
  );
});

Error.displayName = "Input Error"

export default Error;
