import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';

import { getUserAuthData } from 'entities/User';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import cls from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = (props: EditableProfileCardHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    const canEdit = profileData?.id === authData?.id;

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div
            className={classNames(cls.EditableProfileCardHeader, {}, [className])}
        >
            <Text title={t('Профиль')} />
            {canEdit && (
                <div>
                    {readonly ? (
                        <Button
                            onClick={onEdit}
                            theme={ButtonTheme.OUTLINE}
                        >
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <div
                            className={cls.buttonsBlock}
                        >
                            <Button
                                onClick={onCancelEdit}
                                theme={ButtonTheme.OUTLINE_RED}
                            >
                                {t('Отмена')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSave}
                            >
                                {t('Сохранить')}
                            </Button>
                        </div>
                    )}
                </div>
            )}

        </div>
    );
};
