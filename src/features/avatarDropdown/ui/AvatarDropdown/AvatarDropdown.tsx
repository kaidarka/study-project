import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar';
import { AnchorPosition, Dropdown } from 'shared/ui/Popups';

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

    return (
        <Dropdown
            buttonContent={<Avatar size={30} src={authData.avatar} />}
            items={[
                { content: t('Профиль'), href: RoutePath.profile + authData.id },
                ...(isAdminPanelAvailable
                    ? [
                        {
                            content: t('Админ панель'),
                            href: RoutePath.adminPanel,
                        },
                    ]
                    : []),
                { content: t('Выйти'), onClick: logout },
            ]}
            anchor={AnchorPosition.BOTTOM_END}
        />
    );
};
