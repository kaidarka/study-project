import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface ICardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children: ReactNode;
}

export const Card = memo((props: ICardProps) => {
    const { className, children, ...restProps } = props;
    return (
        <div
            className={classNames(cls.Card, {}, [className])}
            {...restProps}
        >
            {children}
        </div>
    );
});
