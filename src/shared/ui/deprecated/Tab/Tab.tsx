import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../Card/Card';
import { TabItem } from './types';

import cls from './Tab.module.scss';

interface TabProps extends TabItem {
    className?: string;
    onClick: (tab: TabItem['value']) => void;
    active?: boolean;
}

/** @deprecated Используйте аналогичный компонент из папки redesigned */
export const Tab = (props: TabProps) => {
    const { className, content, onClick, value, active } = props;
    return (
        <Card
            className={classNames(cls.Tab, { [cls.active]: active }, [className])}
            onClick={() => onClick(value)}
        >
            {content}
        </Card>
    );
};
