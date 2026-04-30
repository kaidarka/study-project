import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export const TextVariant = {
    primary: 'primary',
    error: 'error',
    accent: 'accent',
} as const;

export const TextAlign = {
    right: 'right',
    left: 'left',
    center: 'center',
} as const;

export const TextSize = {
    sm: 'sm',
    md: 'md',
    lg: 'dg',
} as const;

const mapSizeToHeaderTag = {
    [TextSize.sm]: 'h3',
    [TextSize.md]: 'h2',
    [TextSize.lg]: 'h1',
} as const satisfies Record<(typeof TextSize)[keyof typeof TextSize], React.ElementType>;

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: (typeof TextVariant)[keyof typeof TextVariant];
    align?: (typeof TextAlign)[keyof typeof TextAlign];
    size?: (typeof TextSize)[keyof typeof TextSize];
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        theme = TextVariant.primary,
        align = TextAlign.left,
        size = TextSize.md,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const extraClasses = [className, cls[theme], cls[align], cls[size]];

    return (
        <div className={classNames(cls.Text, {}, extraClasses)}>
            {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
