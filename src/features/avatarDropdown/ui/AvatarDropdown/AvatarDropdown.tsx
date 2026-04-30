import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import {
    AnchorPosition as AnchorPositionDeprecated,
    Dropdown as DropdownDeprecated,
} from '@/shared/ui/deprecated/Popups';
import { AnchorPosition, Dropdown } from '@/shared/ui/redesigned/Popups';
import { ToggleFeatures } from '@/shared/lib/features';

export const AvatarDropdown = () => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);

    const dispatch = useDispatch();

    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const isAdminPanelAvailable = isAdmin || isManager;

    const logout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    const content = [
        { content: t('Профиль'), href: getRouteProfile(authData.id) },
        ...(isAdminPanelAvailable
            ? [
                  {
                      content: t('Админ панель'),
                      href: getRouteAdminPanel(),
                  },
              ]
            : []),
        { content: t('Выйти'), onClick: logout },
    ];

    return (
        <ToggleFeatures
            name="isAppRedesigned"
            on={
                <Dropdown
                    buttonContent={<Avatar size={32} src={authData.avatar} />}
                    items={content}
                    anchor={AnchorPosition.BOTTOM_END}
                />
            }
            off={
                <DropdownDeprecated
                    buttonContent={<AvatarDeprecated size={30} src={authData.avatar} />}
                    items={content}
                    anchor={AnchorPositionDeprecated.BOTTOM_END}
                />
            }
        />
    );
};
