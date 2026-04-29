import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IIconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IIconProps) => {
    const { className, Svg, ...otherProps } = props;
    return <Svg className={classNames(cls.Icon, {}, [className])} {...otherProps} />;
});
