import { Button, ButtonTheme } from 'shared/ui/Button';
import { AnchorPosition, Popover } from 'shared/ui/Popups';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { Icon } from 'shared/ui/Icon';
import { NotificationsList } from 'entities/Notification';
import cls from './NotificationButton.module.scss';

export const NotificationButton = () => (
    <Popover
        buttonContent={(
            <Button theme={ButtonTheme.CLEAR}>
                <Icon Svg={NotificationIcon} inverted />
            </Button>
        )}
        anchor={AnchorPosition.TOP_END}
    >
        <NotificationsList className={cls.notifications} />
    </Popover>
);
