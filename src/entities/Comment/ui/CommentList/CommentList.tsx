import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './CommentList.module.scss';
import { IComment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface ICommentListProps {
    className?: string;
    comments?: IComment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: ICommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation('comment');

    if (isLoading) {
        return (
            <div
                className={classNames(cls.CommentList, {}, [className])}
            >
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    if (!comments) {
        return null;
    }

    return (
        <div
            className={classNames(cls.CommentList, {}, [className])}
        >
            {comments?.length
                ? comments.map(
                    (comment) => (
                        <CommentCard
                            comment={comment}
                            key={comment.id}
                            isLoading={isLoading}
                        />
                    ),
                )
                : <Text text={t('Комментарии отсутствуют')} />}
        </div>
    );
});
