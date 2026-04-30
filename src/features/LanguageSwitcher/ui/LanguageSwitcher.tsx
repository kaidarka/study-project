import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button, ButtonVariant } from '@/shared/ui/redesigned/Button';

export const LanguageSwitcher = memo(() => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button variant={ButtonVariant.clear} onClick={toggle}>
            {t('langName')}
        </Button>
    );
});
