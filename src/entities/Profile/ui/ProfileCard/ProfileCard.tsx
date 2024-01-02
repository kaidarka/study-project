import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
// import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
// import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import cls from './ProfileCard.module.scss';

interface IProfileCardProps {
    className?: string;
}

export const ProfileCard = (props: IProfileCardProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const data = useSelector(getProfileData);
    // const error = useSelector(getProfileError);
    // const isLoading = useSelector(getProfileIsLoading);
    return (
        <div
            className={classNames(cls.ProfileCard, {}, [className])}
        >
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button theme={ButtonTheme.OUTLINE} className={cls.editBtn}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.firstName}
                    placeholder={t('Ваше имя')}
                    className={cls.input}
                />
                <Input
                    value={data?.lastName}
                    placeholder={t('Ваша фамилия')}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
