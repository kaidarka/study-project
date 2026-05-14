import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardVariant } from '../Card/Card';
import { TabItem } from './types';

import cls from './Tab.module.scss';

interface TabProps extends TabItem {
    className?: string;
    onClick: (tab: TabItem['value']) => void;
    active?: boolean;
}

export const Tab = (props: TabProps) => {
    const { className, content, onClick, value, active } = props;
    return (
        <Card
            variant={active ? CardVariant.light : CardVariant.normal}
            className={classNames(cls.Tab, { [cls.active]: active }, [className])}
            onClick={() => onClick(value)}
            padding="sm"
            border="round"
        >
            {content}
        </Card>
    );
};
