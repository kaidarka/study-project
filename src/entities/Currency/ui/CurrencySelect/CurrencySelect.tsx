import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { useCallback } from 'react';
import { Currency } from '../../model/types/currency';

interface ICurrencySelectProps {
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    {
        value: Currency.RUB,
        label: Currency.RUB,
    },
    {
        value: Currency.EUR,
        label: Currency.EUR,
    },
    {
        value: Currency.USD,
        label: Currency.USD,
    },
];

export const CurrencySelect = (props: ICurrencySelectProps) => {
    const { value, onChange, readonly } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            label={t('Укажите валюту')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};
