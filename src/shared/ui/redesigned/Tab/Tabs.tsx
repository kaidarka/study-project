import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem } from './types';
import cls from './Tabs.module.scss';
import { Tab } from './Tab';
import { Flex } from '../Stack/Flex/Flex';
import { FlexDirection } from '../Stack/Flex/Flex';

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem['value']) => void;
    direction?: (typeof FlexDirection)[keyof typeof FlexDirection];
}

export const Tabs = (props: TabsProps) => {
    const { className, tabs, value, onTabClick, direction = 'row' } = props;
    return (
        <Flex direction={direction} gap="md" className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Tab
                    key={tab.value}
                    onClick={onTabClick}
                    value={tab.value}
                    content={tab.content}
                    active={value === tab.value}
                />
            ))}
        </Flex>
    );
};
