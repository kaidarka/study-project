import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, memo, ReactElement, useMemo,
} from 'react';
import cls from './Select.module.scss';

export type SelectOption<T extends string = string> = {
    value: T;
    label: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean
}

const SelectComponent = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly = false,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            value={opt.value}
            key={opt.value}
        >
            {opt.label}
        </option>
    )), [options]);

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div
            className={classNames(cls.Wrapper, mods, [className])}
        >
            {label && (
                <span className={cls.label}>{`${label}>`}</span>
            )}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    );
};

interface SelectComponentType {
    <T extends string>(props: SelectProps<T>): ReactElement;
}

export const Select = memo(SelectComponent) as SelectComponentType;
