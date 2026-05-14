import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StickyContentLayout.module.scss';
import { ReactNode } from 'react';

type StickyContentLayoutProps = {
    className?: string;
    left?: ReactNode;
    right?: ReactNode;
    content: ReactNode;
};

export const StickyContentLayout = (props: StickyContentLayoutProps) => {
    const { className, content, left, right } = props;
    return (
        <div className={classNames(cls.StickyContentLayout, {}, [className])}>
            {left && <div className={cls.left}>{left}</div>}
            <div className={cls.content}>{content}</div>
            {right && <div className={cls.right}>{right}</div>}
        </div>
    );
};
