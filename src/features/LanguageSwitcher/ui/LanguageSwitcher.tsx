import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button, ButtonVariant } from '@/shared/ui/redesigned/Button';

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
        <ToggleFeatures
            name="isAppRedesigned"
            off={
                <ButtonDeprecated
                    className={classNames('', {}, [className])}
                    onClick={toggle}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                >
                    {t(short ? 'Короткий язык' : 'Язык')}
                </ButtonDeprecated>
            }
            on={
                <Button variant={ButtonVariant.clear} onClick={toggle}>
                    {t('langName')}
                </Button>
            }
        />
    );
});
