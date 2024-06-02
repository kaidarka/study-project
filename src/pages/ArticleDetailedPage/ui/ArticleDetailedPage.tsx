import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetailed } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useMountEffect } from 'shared/lib/hooks/useMountEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page';
import {
    fetchCommentsByArticleId,
} from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailedPage.module.scss';
import {
    articleDetailedCommentsReducer,
    getArticleComments,
} from '../model/slices/articleDetailedCommentsSlice';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../model/selectors/comments';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';

interface IArticlesDetailedPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailedComments: articleDetailedCommentsReducer,
};

const ArticleDetailedPage = (props: IArticlesDetailedPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string; }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useMountEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const navigate = useNavigate();

    const onClickBack = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    if (!id) {
        return (
            <Page
                className={classNames(cls.ArticlesDetailedPage, {}, [className])}
            >
                {t('Такой статьи не существует')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page
                className={classNames(cls.ArticlesDetailedPage, {}, [className])}
            >
                <Button theme={ButtonTheme.OUTLINE} onClick={onClickBack}>
                    {t('Назад к списку')}
                </Button>
                <ArticleDetailed id={id} />
                <Text title={t('Комментарии')} className={cls.commentTitle} />
                <AddCommentForm onSubmit={onSendComment} />
                {commentsError
                    ? <Text text={t('Ошибка загрузки комментариев')} />
                    : (
                        <CommentList
                            comments={comments}
                            isLoading={commentsIsLoading}
                        />
                    )}
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailedPage);
