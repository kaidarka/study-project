import { Fragment, memo, ReactNode } from 'react';
import { MenuButton, MenuItems, MenuItem, Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '../../../ui/AppLink/AppLink';
import cls from './Dropdown.module.scss';
import popupCls from '../styles/popup.module.scss';
import { AnchorPosition } from '../model/consts';

type DropdownAnchorType = (typeof AnchorPosition)[keyof typeof AnchorPosition];

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
    const { className, items, buttonContent, anchor = AnchorPosition.BOTTOM_START } = props;

    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
            <MenuButton className={popupCls.button}>{buttonContent}</MenuButton>
            <MenuItems as="ul" anchor={anchor} className={popupCls.items}>
                {items.map((item, index) => {
                    const content = ({ focus }: { focus: boolean }) => (
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
                    );

                    if (item.href) {
                        return (
                            <MenuItem as={AppLink} to={item.href} key={`dropdown-link-${index}`}>
                                {content}
                            </MenuItem>
                        );
                    }
                    return (
                        <MenuItem
                            as={Fragment}
                            disabled={item.disabled}
                            key={`dropdown-item-${index}`}
                        >
                            {content}
                        </MenuItem>
                    );
                })}
            </MenuItems>
        </Menu>
    );
});
