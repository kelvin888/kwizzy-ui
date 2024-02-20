import React from 'react';
import clsx from 'clsx';

const DEFAULT_TEXT_AREA_ROWS = 5;

export type TextAreaProps = {
  error?: boolean;
  resize?: boolean;
  className?: string;
  rows?: number
} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error, resize, ...props }, ref) => {
    const { className, rows = DEFAULT_TEXT_AREA_ROWS, ...rest } = props;

    return (
      <textarea
        ref={ref}
        rows={rows}
        className={clsx(
          'block w-full scroll-pb-3 rounded-[30px] px-9 border-0 p-3 text-sm font-regular text-grayscale-180 outline-none ring-1 disabled:cursor-not-allowed disabled:bg-grayscale-5 disabled:text-grayscale-50',
          {
            'ring-grayscale-30 focus:ring-primary-100': error === false,
            'ring-danger-100': error,
            'resize-none': resize === false,
          },
          className,
        )}
        {...rest}
      />
    );
  },
);

TextArea.displayName = "TextArea"

export default TextArea;
