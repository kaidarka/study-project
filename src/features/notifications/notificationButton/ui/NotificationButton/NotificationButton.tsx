import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { AnchorPosition, Popover } from '@/shared/ui/Popups';
import NotificationIcon from '@/shared/assets/icons/notification.svg?react';
import { Icon } from '@/shared/ui/Icon';
import { NotificationsList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/Drawer';
import cls from './NotificationButton.module.scss';

export const NotificationButton = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsDrawerOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsDrawerOpen(false);
    }, []);

    const triggerMobile = (
        <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    // Для desktop `PopoverButton` сам рендерит `<button>`.
    // Поэтому внутрь него нельзя класть наш `<Button>` (тоже `<button>`).
    const triggerDesktop = (
        <span>
            <Icon Svg={NotificationIcon} inverted />
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
                <Drawer isOpen={isDrawerOpen} onClose={onCloseDrawer} className={cls.drawer}>
                    <NotificationsList />
                </Drawer>
            </MobileView>
        </div>
    );
};
