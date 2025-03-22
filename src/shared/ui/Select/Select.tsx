import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export type SelectOption<T = string> = {
    value: T;
    label: string;
}

interface ISelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean
}

export const Select = memo((props: ISelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly = false,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
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
});
