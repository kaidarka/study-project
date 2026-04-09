import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton';
import { useGetNotificationsQuery } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationsListProps {
    className?: string;
}

export const NotificationsList = memo((props: NotificationsListProps) => {
    const { className } = props;
    const { data: notifications, isLoading } = useGetNotificationsQuery(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack
                gap="sm"
                max
                className={classNames('', {}, [className])}
            >
                <Skeleton width="100%" height={100} border="8px" />
                <Skeleton width="100%" height={100} border="8px" />
                <Skeleton width="100%" height={100} border="8px" />
            </VStack>
        );
    }

    return (
        <VStack
            gap="md"
            max
            className={classNames('', {}, [className])}
        >
            {notifications?.map((notification) => (
                <NotificationItem
                    key={notification.id}
                    notification={notification}
                />
            ))}
        </VStack>
    );
});
