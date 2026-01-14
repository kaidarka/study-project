import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface ICountrySelectProps {
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    {
        value: Country.Russia,
        content: Country.Russia,
    },
    {
        value: Country.Belarus,
        content: Country.Belarus,
    },
    {
        value: Country.USA,
        content: Country.USA,
    },
];

export const CountrySelect = (props: ICountrySelectProps) => {
    const { value, onChange, readonly } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <ListBox
            items={options}
            value={value}
            onChange={onChangeHandler}
            placeholder={t('Укажите страну')}
            readonly={readonly}
            label={t('Укажите страну')}
        />
    );
};
