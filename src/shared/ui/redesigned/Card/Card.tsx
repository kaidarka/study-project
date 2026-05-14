import { HTMLAttributes, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export const CardVariant = {
    normal: 'normal',
    outlined: 'outlined',
    light: 'light',
} as const;

export const paddingVariants = {
    none: 'none',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
} as const;

export const borderVariants = {
    round: 'round',
    normal: 'normal',
} as const;

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    variant?: (typeof CardVariant)[keyof typeof CardVariant];
    children: ReactNode;
    padding?: (typeof paddingVariants)[keyof typeof paddingVariants];
    border?: (typeof borderVariants)[keyof typeof borderVariants];
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        variant = CardVariant.normal,
        padding = paddingVariants.md,
        border = borderVariants.normal,
        ...restProps
    } = props;
    return (
        <div
            className={classNames(cls.Card, {}, [
                className,
                cls[variant],
                cls[padding],
                cls[`border-${border}`],
            ])}
            {...restProps}
        >
            {children}
        </div>
    );
};
