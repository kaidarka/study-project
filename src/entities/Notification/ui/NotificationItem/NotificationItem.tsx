import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/features';

interface NotificationItemProps {
    className?: string;
    notification: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, notification } = props;
    const content = (
        <ToggleFeatures
            name="isAppRedesigned"
            off={
                <CardDeprecated className={classNames(cls.NotificationItem, {}, [className])}>
                    <TextDeprecated title={notification.title} text={notification.description} />
                </CardDeprecated>
            }
            on={
                <Card padding={'sm'} className={classNames(cls.NotificationItem, {}, [className])}>
                    <Text title={notification.title} text={notification.description} />
                </Card>
            }
        />
    );

    if (notification.href) {
        return (
            <a className={cls.link} target="_blank" href={notification.href} rel="noreferrer">
                {content}
            </a>
        );
    }

    return content;
});
