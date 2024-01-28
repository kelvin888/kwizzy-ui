import React, { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx';

export type ButtonVariantsVariant = VariantProps<typeof buttonVariantsVariant>;

export type ButtonVariantsSize = VariantProps<typeof buttonVariantsSize>;

export type ButtonVariantsType = VariantProps<typeof buttonVariantsType>;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
    ButtonVariantsSize &
    ButtonVariantsVariant &
    ButtonVariantsType & {
        iconBefore?: ReactNode;
        iconAfter?: ReactNode;
        isLoading?: boolean;
    };

export const buttonVariantsVariant = cva(
    'inline-flex items-center justify-center gap-1 rounded font-medium transition-colors disabled:cursor-not-allowed relative',
    {
        variants: {
            variant: {
                primary: [
                    'bg-primary-100',
                    'text-white',
                ],
                secondary: [
                    'bg-secondary-100',
                ],
                tertiary: [
                    'bg-grayscale-60',
                    'text-white',
                    'rounded-[1.875rem]',
                    'font-poppings'
                ],
                white: [
                    'bg-white',
                    'text-black',
                    'shadow-sm',
                    'rounded-[1.875rem]'
                ],
                success: [
                    'bg-success-100',
                    'text-white',
                ],
                warning: [
                    'bg-warning-100',
                    'text-white',
                ],
                plain: [
                    'h-auto w-auto',
                    'text-grayscale-180',
                ],
                gradient: [
                    'text-white',
                    'bg-gradient-primary',
                    'shadow-md'
                ]
            },
        },
        defaultVariants: {
            variant: 'primary',
        },
    },
);

export const buttonVariantsSize = cva('', {
    variants: {
        size: {
            small: ['h-7', 'px-3', 'text-sm'],
            medium: ['h-9', 'px-3', 'text-md'],
            large: ['h-14', 'px-9', 'text-md'],
        },
    },
    defaultVariants: {
        size: 'large',
    },
});

export const buttonVariantsType = cva('', {
    variants: {
        buttonType: {
            default: [],
            outlined: [
                'bg-white',
                'border-solid',
                'border-secondary-100',
                'text-secondary-100',
                'border-[1.5px]',
                'text-2xl',
                'font-semibold'
            ],

        },
    },
    defaultVariants: {
        buttonType: 'default',
    },
});

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant,
            children,
            iconBefore,
            iconAfter,
            size,
            buttonType,
            className,
            isLoading,
            ...props
        },
        ref,
    ) => (
        <button
            ref={ref}
            className={twMerge(
                clsx(
                    buttonVariantsSize({ size }),
                    buttonVariantsVariant({ variant }),
                    buttonVariantsType({ buttonType }),
                    className,
                ),
            )}
            type="button"
            {...props}
        >
            {isLoading && (
                <div className="inline-flex h-5 w-5 content-center items-center">
                    ...
                </div>
            )}
            {iconBefore && <div>{iconBefore}</div>}
            {children}
            {iconAfter && <div className="inline-flex">{iconAfter}</div>}
        </button>
    ),
);

Button.displayName = "Button"
export default Button;
