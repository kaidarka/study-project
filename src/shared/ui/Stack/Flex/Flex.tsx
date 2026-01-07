import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { DetailedHTMLProps, ReactNode } from 'react';
import cls from './Flex.module.scss';

export const FlexAlignItems = {
    start: 'start',
    center: 'center',
    end: 'end',
} as const;

type FlexAlignItemsType = typeof FlexAlignItems[keyof typeof FlexAlignItems];

export const FlexJustifyContent = {
    start: 'start',
    center: 'center',
    end: 'end',
    between: 'between',
} as const;

type FlexJustifyContentType = typeof FlexJustifyContent[keyof typeof FlexJustifyContent];

export const FlexDirection = {
    row: 'row',
    column: 'column',
} as const;

type FlexDirectionType = typeof FlexDirection[keyof typeof FlexDirection];

export const FlexGap = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
} as const;

type FlexGapType = typeof FlexGap[keyof typeof FlexGap];

const alignClasses: Record<FlexAlignItemsType, string> = {
    start: cls.alignItemsStart,
    center: cls.alignItemsCenter,
    end: cls.alignItemsEnd,
};

const justifyClasses: Record<FlexJustifyContentType, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const directionClasses: Record<FlexDirectionType, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGapType, string> = {
    xs: cls.gapXs,
    sm: cls.gapSm,
    md: cls.gapMd,
    lg: cls.gapLg,
};

type DivProps = DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    alignItems?: FlexAlignItemsType;
    justifyContent?: FlexJustifyContentType;
    direction?: FlexDirectionType;
    gap?: FlexGapType;
    max?: boolean
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        alignItems = FlexAlignItems.start,
        direction = FlexDirection.row,
        justifyContent = FlexJustifyContent.start,
        gap,
        max,
    } = props;

    const mods: Mods = {
        [cls.max]: max,
    };

    return (
        <div
            className={classNames(cls.Flex, mods, [
                className,
                alignClasses[alignItems],
                justifyClasses[justifyContent],
                directionClasses[direction],
                gap && gapClasses[gap],
            ])}
        >
            {children}
        </div>
    );
};
