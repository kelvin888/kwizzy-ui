import React from 'react';
import clsx from 'clsx';

const Group = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx('flex flex-col gap-2', className)}
      {...props}
    >
      {children}
    </div>
  );
});

Group.displayName = "Group"

export default Group;
