import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import NotificationIcon from '@/shared/assets/icons/notifications.svg';
import { NotificationsList } from '@/entities/Notification';
import { Drawer as DrawerDeprecated } from '@/shared/ui/deprecated/Drawer';
import cls from './NotificationButton.module.scss';
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
        <Icon Svg={NotificationIcon} onClick={onOpenDrawer} width={24} height={24} />
    );

    // Для desktop `PopoverButton` сам рендерит `<button>`.
    // Поэтому внутрь него нельзя класть наш `<Button>` (тоже `<button>`).
    const triggerDesktop = (
        <span>
            <Icon Svg={NotificationIcon} width={24} height={24} />
        </span>
    );

    return (
        <div>
            <BrowserView>
                <Popover buttonContent={triggerDesktop} anchor={AnchorPosition.TOP_END}>
                    <NotificationsList className={cls.notifications} />
                </Popover>
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
