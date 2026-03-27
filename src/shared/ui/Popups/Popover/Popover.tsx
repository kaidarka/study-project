import { memo, ReactNode } from 'react';
import {
    MenuButton, MenuItems, Menu,
} from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Popover.module.scss';
import popupCls from '../styles/popup.module.scss';
import { AnchorPosition } from '../model/consts';

interface PopoverProps {
    buttonContent: ReactNode;
    className?: string;
    anchor: typeof AnchorPosition[keyof typeof AnchorPosition];
    children?: ReactNode
}

export const Popover = memo((props: PopoverProps) => {
    const {
        className, buttonContent, children, anchor,
    } = props;

    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <MenuButton className={popupCls.button}>{buttonContent}</MenuButton>
            <MenuItems as="ul" anchor={anchor} className={popupCls.items}>
                {children}
            </MenuItems>
        </Menu>
    );
});
