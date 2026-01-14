import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Currency } from '../../model/types/currency';

interface ICurrencySelectProps {
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    {
        value: Currency.RUB,
        content: Currency.RUB,
    },
    {
        value: Currency.EUR,
        content: Currency.EUR,
    },
    {
        value: Currency.USD,
        content: Currency.USD,
    },
];

export const CurrencySelect = (props: ICurrencySelectProps) => {
    const { value, onChange, readonly } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            items={options}
            value={value}
            onChange={onChangeHandler}
            placeholder={t('Укажите валюту')}
            readonly={readonly}
            label={t('Укажите валюту')}
        />
    );
};
