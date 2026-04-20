import {
    Listbox as HeadlessListbox, ListboxButton, ListboxOption, ListboxOptions,
} from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonSize, ButtonTheme } from '../../../ui/Button/Button';
import { HStack } from '../../../ui/Stack';
import buttonCls from '../../../ui/Button/Button.module.scss';
import cls from './ListBox.module.scss';
import popupCls from '../styles/popup.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items: ListBoxItem[];
    className?: string;
    value?: string;
    onChange: <T extends string>(value: T) => void;
    placeholder?: string;
    readonly?: boolean;
    label?: string
}

export const ListBox = (props: ListBoxProps) => {
    const {
        items, value, className, onChange, placeholder = 'Select...', readonly = false, label,
    } = props;

    return (
        <HStack gap="sm" alignItems="center">
            {label && <span>{`${label}>`}</span>}
            <HeadlessListbox
                as="div"
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <ListboxButton
                    className={classNames(
                        popupCls.button,
                        { [buttonCls.disabled]: readonly },
                        [
                            buttonCls.Button,
                            buttonCls[ButtonTheme.OUTLINE],
                            buttonCls[ButtonSize.M],
                        ],
                    )}
                >
                    {items.find((item) => item.value === value)?.content || placeholder}
                </ListboxButton>
                <ListboxOptions anchor="top" className={popupCls.items}>
                    {items.map((item) => (
                        <ListboxOption
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ focus, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [popupCls.active]: focus,
                                        [popupCls.disabled]: item.disabled,
                                    })}
                                >
                                    {selected && '!'}
                                    {item.content}
                                </li>
                            )}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </HeadlessListbox>
        </HStack>
    );
};
