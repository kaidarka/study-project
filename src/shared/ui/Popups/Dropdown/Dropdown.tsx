import { Fragment, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    MenuButton, MenuItems, MenuItem, Menu,
} from '@headlessui/react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Dropdown.module.scss';

export const DropdownAnchor = {
    BOTTOM_START: 'bottom start',
    BOTTOM_END: 'bottom end',
    TOP_START: 'top start',
    TOP_END: 'top end',
} as const;

type DropdownAnchorType = typeof DropdownAnchor[keyof typeof DropdownAnchor];

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
        className, items, buttonContent, anchor = 'bottom start',
    } = props;

    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <MenuButton className={cls.button}>{buttonContent}</MenuButton>
            <MenuItems as="ul" anchor={anchor} className={cls.items}>
                {items.map((item) => {
                    const content = (({ focus }: { focus: boolean }) => (
                        <button
                            type="button"
                            onClick={item.onClick}
                            disabled={item.disabled}
                            className={classNames(cls.item, {
                                [cls.active]: focus,
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
