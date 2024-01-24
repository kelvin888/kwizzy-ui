import React from 'react';
import clsx from 'clsx';

type CaptionProps = {
  cta?: {
    label: string;
    onClick: () => void;
    htmlAttributes?: { [key: string]: string };
  };
} & React.HTMLAttributes<HTMLDivElement>;

const Caption = React.forwardRef<HTMLDivElement, CaptionProps>(
  ({ children, cta, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'flex select-none items-center text-sm',
          className,
        )}
        {...props}
      >
        {children && (
          <span className="flex items-center gap-1 text-grayscale-100">
            {children}
          </span>
        )}
        {cta && (
          <span
            onClick={cta.onClick}
            tabIndex={0}
            className="ml-auto cursor-pointer font-medium text-primary-100 hover:underline"
            {...cta.htmlAttributes}
          >
            {cta.label}
          </span>
        )}
      </div>
    );
  },
);
Caption.displayName = "Caption"

export default Caption;
