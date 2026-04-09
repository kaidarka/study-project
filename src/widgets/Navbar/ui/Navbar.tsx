import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import {
    getUserAuthData,
} from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { HStack } from 'shared/ui/Stack';
import { NotificationButton } from 'features/notifications/notificationButton';
import { AvatarDropdown } from 'features/avatarDropdown';
import { Drawer } from 'shared/ui/Drawer';
import cls from './Navbar.module.scss';

interface INavbarProps {
    className?: string;
}

export const Navbar = memo((props: INavbarProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsDrawerOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsDrawerOpen(false);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <Text title={t('AppName')} theme={TextTheme.INVERTED} className={cls.appName} />
                <AppLink
                    to={RoutePath.articleCreate}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.createBtn}
                >
                    {t('Создать статью')}
                </AppLink>
                <HStack gap="lg" className={cls.actions} alignItems="center">
                    <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
                        Click me
                    </Button>
                    <Drawer isOpen={isDrawerOpen} onClose={onCloseDrawer} className={cls.drawer}>
                        content
                    </Drawer>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal} className={cls.links}>
                {t('Войти')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </header>
    );
});
