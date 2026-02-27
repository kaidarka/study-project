import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export const TextTheme = {
    PRIMARY: 'primary',
    INVERTED: 'inverted',
    ERROR: 'error',
} as const;

export const TextAlign = {
    RIGHT: 'right',
    LEFT: 'left',
    CENTER: 'center',
} as const;

export const TextSize = {
    S: 'sizeS',
    M: 'sizeM',
    L: 'sizeL',
} as const;

const mapSizeToHeaderTag: Record<typeof TextSize[keyof typeof TextSize], React.ElementType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
};

interface ITextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: typeof TextTheme[keyof typeof TextTheme];
    align?: typeof TextAlign[keyof typeof TextAlign];
    size?: typeof TextSize[keyof typeof TextSize];
}

export const Text = memo((props: ITextProps) => {
    const {
        className,
        text,
        title, theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    return (
        <div
            className={classNames(
                cls.Text,
                {},
                [className, cls[theme], cls[align], cls[size]],
            )}
        >
            {title && (<HeaderTag className={cls.title}>{title}</HeaderTag>)}
            {text && (<p className={cls.text}>{text}</p>)}
        </div>
    );
});
