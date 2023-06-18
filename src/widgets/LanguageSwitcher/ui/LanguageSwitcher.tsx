import {classNames} from "shared/lib/classNames/classNames";
import cls from './LanguageSwitcher.module.scss';
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface ILanguageSwitcherProps {
    className?: string;
}

export const LanguageSwitcher = (props: ILanguageSwitcherProps) => {
    const {className} = props;
    const {t, i18n} = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <Button
            className={classNames(cls.LanguageSwitcher, {}, [className])}
            onClick={toggle}
            theme={ThemeButton.CLEAR}
        >
            {t('Язык')}
        </Button>
    );
};
