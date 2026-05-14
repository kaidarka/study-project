import {
    Listbox as HeadlessListbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonSize, ButtonVariant } from '../../Button/Button';
import { HStack } from '../../Stack';
import buttonCls from '../../Button/Button.module.scss';
import cls from './ListBox.module.scss';
import popupCls from '../styles/popup.module.scss';

export interface ListBoxItem<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    items: ListBoxItem<T>[];
    className?: string;
    value?: T;
    onChange: (value: T) => void;
    placeholder?: string;
    readonly?: boolean;
    label?: string;
    anchor?: 'top' | 'bottom' | 'left' | 'right';
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
    const {
        items,
        value,
        className,
        onChange,
        placeholder = 'Select...',
        readonly = false,
        label,
        anchor = 'top',
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
                    className={classNames(popupCls.button, { [buttonCls.disabled]: readonly }, [
                        buttonCls.Button,
                        buttonCls[ButtonVariant.filled],
                        buttonCls[ButtonSize.md],
                    ])}
                >
                    {items.find((item) => item.value === value)?.content || placeholder}
                </ListboxButton>
                <ListboxOptions anchor={anchor} className={popupCls.items}>
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
