import { classNames } from 'shared/lib/classNames/classNames';
import { TabItem } from './types';
import cls from './Tabs.module.scss';
import { Tab } from './Tab';

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem['value']) => void;
}

export const Tabs = (props: TabsProps) => {
    const {
        className, tabs, value, onTabClick,
    } = props;
    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Tab
                    key={tab.value}
                    onClick={onTabClick}
                    value={tab.value}
                    content={tab.content}
                    active={value === tab.value}
                />
            ))}
        </div>
    );
};
