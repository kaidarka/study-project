import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { useCallback } from 'react';
import { Country } from '../../model/types/country';

interface ICountrySelectProps {
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    {
        value: Country.Russia,
        label: Country.Russia,
    },
    {
        value: Country.Belarus,
        label: Country.Belarus,
    },
    {
        value: Country.USA,
        label: Country.USA,
    },
];

export const CountrySelect = (props: ICountrySelectProps) => {
    const { value, onChange, readonly } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};
