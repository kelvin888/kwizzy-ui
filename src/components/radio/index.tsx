import clsx from 'clsx';
import { type VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export type RadioVariants = VariantProps<typeof radioClassNamesByProps>;

export type RadioProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'size'
> &
  RadioVariants & {
    error?: boolean;
  };

const radioClassNamesByProps = cva(
  'shrink-0 cursor-pointer appearance-none rounded-full border border-grayscale-100 ring-inset ring-transparent hover:border-primary-100 hover:bg-primary-10',
  {
    variants: {
      size: {
        small: ['w-4', 'h-4', 'ring-3'],
        medium: ['w-6', 'h-6', 'ring-5'],
      },

      disabled: {
        true: [
          'border-grayscale-30',
          'bg-grayscale-5',
          'cursor-not-allowed',
          'ring-grayscale-5',
          'hover:bg-grayscale-5',
          'hover:border-grayscale-30',
        ],
      },
      checked: {
        true: [
          'bg-primary-100',
          'border-primary-100',
          'ring-white',
          'hover:border-primary-100',
          'hover:bg-primary-100',
        ],
      },
      error: {
        true: [],
      },
    },
    compoundVariants: [
      {
        disabled: true,
        checked: true,
        className:
          'border-grayscale-100 bg-grayscale-100 ring-grayscale-5 hover:border-grayscale-100 hover:bg-grayscale-100',
      },
      {
        error: true,
        checked: false,
        disabled: false,
        className:
          'border-danger-100 hover:border-danger-100 hover:bg-white',
      },
    ],
  },
);

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      size = 'medium',
      checked = false,
      error = false,
      disabled = false,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <input
        type="radio"
        ref={ref}
        className={twMerge(
          clsx(
            radioClassNamesByProps({
              size,
              error,
              disabled,
              checked,
            }),
            className,
          ),
        )}
        checked={checked}
        disabled={disabled}
        {...props}
      />
    );
  },
);

Radio.displayName = 'Radio';

export default Radio;
