import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, memo } from 'react';
import cls from './Skeleton.module.scss';

interface ISkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = memo((props: ISkeletonProps) => {
    const {
        className,
        height,
        width,
        border,
    } = props;

    const style: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };
    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={style}
        />
    );
});
