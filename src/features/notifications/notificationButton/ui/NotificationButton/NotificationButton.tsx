import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { AnchorPosition, Popover } from '@/shared/ui/Popups';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { Icon } from '@/shared/ui/Icon';
import { NotificationsList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/Drawer';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import cls from './NotificationButton.module.scss';

export const NotificationButton = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsDrawerOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsDrawerOpen(false);
    }, []);

    const trigger = (
        <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    return (
        <div>
            <BrowserView>
                <Popover
                    buttonContent={trigger}
                    anchor={AnchorPosition.TOP_END}
                >
                    <NotificationsList className={cls.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <AnimationProvider>
                    <Drawer isOpen={isDrawerOpen} onClose={onCloseDrawer} className={cls.drawer}>
                        <NotificationsList />
                    </Drawer>
                </AnimationProvider>
            </MobileView>
        </div>

    );
};
