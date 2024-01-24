import React from 'react';
import clsx from 'clsx';

type FieldLabelProps = {
  required?: boolean;
} & React.HTMLAttributes<HTMLLabelElement>;

const Label = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ required, className, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={clsx(
          'flex select-none items-center text-sm font-medium text-grayscale-50',
          className,
        )}
        {...props}
      >
        {children}
        {!required && (
          <span className="ml-1 font-regular text-grayscale-50">
            (optional)
          </span>
        )}
      </label>
    );
  },
);

Label.displayName = "Label"

export default Label;
