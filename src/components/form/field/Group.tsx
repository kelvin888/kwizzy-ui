import React from 'react';
import clsx from 'clsx';

interface GroupProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Group = React.forwardRef<HTMLDivElement, GroupProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx('flex flex-col gap-2', className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Group.displayName = 'Group';

export default Group;
