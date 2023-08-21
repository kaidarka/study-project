import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface ILoginFormProps {
    className?: string;
}

export const LoginForm = (props: ILoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.LoginForm, {}, [className])}
        >
            <Input
                autofocus
                className={cls.input}
                placeholder={t('Введите имя')}
                // onChange={}
            />
            <Input
                className={cls.input}
                placeholder={t('Введите пароль')}
                // onChange={}
            />
            <Button className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};
