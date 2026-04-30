import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import {
    AnchorPosition as AnchorPositionDeprecated,
    Popover as PopoverDeprecated,
} from '@/shared/ui/deprecated/Popups';
import NotificationIconDeprecated from '@/shared/assets/icons/notification.svg';
import NotificationIcon from '@/shared/assets/icons/notifications.svg';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { NotificationsList } from '@/entities/Notification';
import { Drawer as DrawerDeprecated } from '@/shared/ui/deprecated/Drawer';
import cls from './NotificationButton.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { AnchorPosition, Popover } from '@/shared/ui/redesigned/Popups';

export const NotificationButton = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsDrawerOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsDrawerOpen(false);
    }, []);

    const triggerMobile = (
        <ToggleFeatures
            name="isAppRedesigned"
            off={
                <ButtonDeprecated theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
                    <IconDeprecated Svg={NotificationIconDeprecated} inverted />
                </ButtonDeprecated>
            }
            on={<Icon Svg={NotificationIcon} onClick={onOpenDrawer} width={24} height={24} />}
        />
    );

    // Для desktop `PopoverButton` сам рендерит `<button>`.
    // Поэтому внутрь него нельзя класть наш `<Button>` (тоже `<button>`).
    const triggerDesktop = (
        <ToggleFeatures
            name="isAppRedesigned"
            off={
                <span>
                    <IconDeprecated Svg={NotificationIconDeprecated} inverted />
                </span>
            }
            on={
                <span>
                    <Icon Svg={NotificationIcon} width={24} height={24} />
                </span>
            }
        />
    );

    return (
        <div>
            <BrowserView>
                <ToggleFeatures
                    name="isAppRedesigned"
                    off={
                        <PopoverDeprecated
                            buttonContent={triggerDesktop}
                            anchor={AnchorPositionDeprecated.TOP_END}
                        >
                            <NotificationsList className={cls.notifications} />
                        </PopoverDeprecated>
                    }
                    on={
                        <Popover buttonContent={triggerDesktop} anchor={AnchorPosition.TOP_END}>
                            <NotificationsList className={cls.notifications} />
                        </Popover>
                    }
                />
            </BrowserView>
            <MobileView>
                {triggerMobile}
                <DrawerDeprecated
                    isOpen={isDrawerOpen}
                    onClose={onCloseDrawer}
                    className={cls.drawer}
                >
                    <NotificationsList />
                </DrawerDeprecated>
            </MobileView>
        </div>
    );
};
