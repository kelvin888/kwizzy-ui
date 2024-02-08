import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export type TextInputProps = {
  error?: boolean;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ error, iconBefore, iconAfter, ...props }, ref) => {
    const { className, ...rest } = props;

    return (
      <div className="relative w-full">
        {iconBefore && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-grayscale-100">
            {iconBefore}
          </div>
        )}
        <input
          ref={ref}
          className={twMerge(clsx(
            'block h-[4rem] w-full rounded-[1.875rem] bg-white shadow-sm border-0 px-9 text-sm font-regular text-grayscale-180 outline-none ring-1 disabled:cursor-not-allowed disabled:bg-grayscale-5 disabled:text-grayscale-50',
            {
              'pl-10': iconBefore,
              'pr-10': iconAfter,
              'ring-grayscale-30 focus:ring-primary-100': !error,
              'ring-danger-100': error,
            },
            className,
          ))}
          {...rest}
        />
        {iconAfter && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-grayscale-100">
            {iconAfter}
          </div>
        )}
      </div>
    );
  },
);

TextInput.displayName = "TextInput"

export default TextInput;
