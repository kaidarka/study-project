import {
    Listbox as HeadlessListbox, ListboxButton, ListboxOption, ListboxOptions,
} from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
}

interface ListBoxProps {
    items: ListBoxItem[];
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
}

export const ListBox = (props: ListBoxProps) => {
    const {
        items, value, className, onChange, placeholder = 'Select...',
    } = props;

    return (
        <HeadlessListbox
            as="div"
            className={classNames(cls.ListBox, {}, [className])}
            value={value}
            onChange={onChange}
        >
            <ListboxButton className={cls.button}>
                <Button>
                    {value ? items.find((item) => item.value === value)?.content : placeholder}
                </Button>
            </ListboxButton>
            <ListboxOptions anchor="bottom" className={cls.options}>
                {items.map((person) => (
                    <ListboxOption
                        key={person.value}
                        value={person}
                        as={Fragment}
                    >
                        {({ focus, selected }) => (
                            <li className={classNames(cls.item, { [cls.active]: focus })}>
                                {selected && '!'}
                                {person.content}
                            </li>
                        )}
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </HeadlessListbox>
    );
};
