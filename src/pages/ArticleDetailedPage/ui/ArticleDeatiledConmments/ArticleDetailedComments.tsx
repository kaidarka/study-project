import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text';
import { useMountEffect } from 'shared/lib/hooks/useMountEffect';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailedCommentsSlice';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from '../../model/selectors/comments';
import {
    addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailedCommentsProps {
    id: string;
}

export const ArticleDetailedComments = (props: ArticleDetailedCommentsProps) => {
    const { id } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );
    useMountEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    return (
        <VStack gap="md">
            <Text title={t('Комментарии')} />
            <AddCommentForm onSubmit={onSendComment} />
            {commentsError ? (
                <Text text={t('Ошибка загрузки комментариев')} />
            ) : (
                <CommentList comments={comments} isLoading={commentsIsLoading} />
            )}
        </VStack>
    );
};
