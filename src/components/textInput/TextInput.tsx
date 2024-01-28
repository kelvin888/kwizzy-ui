import React, { ReactNode } from 'react';
import clsx from 'clsx';

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
            <div className="relative">
                {iconBefore && (
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-grayscale-100">
                        {iconBefore}
                    </div>
                )}
                <input
                    ref={ref}
                    className={clsx(
                        'block h-[2.5rem] w-full rounded border-0 px-3 text-sm font-regular text-grayscale-180 outline-none ring-1 disabled:cursor-not-allowed disabled:bg-grayscale-5 disabled:text-grayscale-50',
                        {
                            'pl-10': iconBefore,
                            'pr-10': iconAfter,
                            'ring-grayscale-30 focus:ring-primary-100': !error,
                            'ring-danger-100': error,
                        },
                        className,
                    )}
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

TextInput.displayName = "Input"

export default TextInput;
