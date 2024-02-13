import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { IComment } from 'entities/Comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './CommentCard.module.scss';

interface ICommentCardProps {
    className?: string;
    comment?: IComment
    isLoading?: boolean;
}

export const CommentCard = memo((props: ICommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(cls.CommentCard, {}, [className])}
            >
                <div className={cls.header}>
                    <Skeleton border="50%" width={30} height={30} />
                    <Skeleton height={16} width={100} />
                </div>
                <Skeleton width="100%" height={50} />
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink className={cls.header} to={`${RoutePath.profile}${comment?.user.id}`}>
                {comment?.user.avatar && <Avatar size={30} src={comment?.user.avatar} />}
                <Text title={comment?.user.username} />
            </AppLink>
            <Text text={comment?.text} />
        </div>
    );
});
