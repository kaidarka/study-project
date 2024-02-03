import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo } from 'react';
import cls from './Icon.module.scss';

interface IIconProps {
    className?: string;
    Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IIconProps) => {
    const { className, Svg } = props;
    return (
        <Svg
            className={classNames(cls.Icon, {}, [className])}
        />
    );
});
