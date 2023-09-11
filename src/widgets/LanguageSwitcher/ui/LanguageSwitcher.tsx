import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ILanguageSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LanguageSwitcher = memo((props: ILanguageSwitcherProps) => {
    const { className, short } = props;
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggle}
            theme={ButtonTheme.BACKGROUND_INVERTED}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
});
