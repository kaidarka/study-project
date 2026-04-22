import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IIconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

export const Icon = memo((props: IIconProps) => {
    const { className, Svg, inverted, ...otherProps } = props;
    return (
        <Svg
            className={classNames(cls.Icon, { [cls.inverted]: inverted }, [className])}
            {...otherProps}
        />
    );
});
