import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export const ButtonVariant = {
    clear: 'clear',
    outline: 'outline',
    filled: 'filled',
} as const;

export const ButtonSize = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
} as const;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: (typeof ButtonVariant)[keyof typeof ButtonVariant];
    square?: boolean;
    size?: (typeof ButtonSize)[keyof typeof ButtonSize];
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        children,
        className,
        square,
        disabled,
        variant = ButtonVariant.outline,
        size = ButtonSize.md,
        ...otherProps
    } = props;

    const classes = [className, cls[variant], cls[size]];
    const mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    } as const satisfies Mods;

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, classes)}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
