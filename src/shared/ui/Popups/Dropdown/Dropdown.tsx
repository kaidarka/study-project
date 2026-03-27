import { Fragment, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    MenuButton, MenuItems, MenuItem, Menu,
} from '@headlessui/react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Dropdown.module.scss';
import popupCls from '../styles/popup.module.scss';
import { AnchorPosition } from '../model/consts';

type DropdownAnchorType = typeof AnchorPosition[keyof typeof AnchorPosition];

export interface DropdownItem {
    disabled?: boolean;
    content: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    buttonContent: ReactNode;
    anchor?: DropdownAnchorType;
}

export const Dropdown = memo((props: DropdownProps) => {
    const {
        className, items, buttonContent, anchor = AnchorPosition.BOTTOM_START,
    } = props;

    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <MenuButton className={popupCls.button}>{buttonContent}</MenuButton>
            <MenuItems as="ul" anchor={anchor} className={popupCls.items}>
                {items.map((item) => {
                    const content = (({ focus }: { focus: boolean }) => (
                        <button
                            type="button"
                            onClick={item.onClick}
                            disabled={item.disabled}
                            className={classNames(cls.item, {
                                [popupCls.active]: focus,
                                [popupCls.disabled]: item.disabled,
                            })}
                        >
                            {item.content}
                        </button>
                    ));

                    if (item.href) {
                        return (
                            <MenuItem as={AppLink} to={item.href}>
                                {content}
                            </MenuItem>
                        );
                    }
                    return (
                        <MenuItem as={Fragment} disabled={item.disabled}>
                            {content}
                        </MenuItem>
                    );
                })}
            </MenuItems>
        </Menu>
    );
});
