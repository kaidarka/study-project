import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetailed, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
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
import { Page } from 'widgets/Page';
import {
    fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailedPage.module.scss';
import {
    getArticleComments,
} from '../../model/slices/articleDetailedCommentsSlice';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from '../../model/selectors/comments';
import {
    addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import {
    getArticleRecommendations,
} from '../../model/slices/articleDetailedRecommendationsSlice';
import {
    getArticleRecommendationsIsLoading,
} from '../../model/selectors/recommendations';
import {
    fetchArticlesRecommendations,
} from '../../model/services/fetchArticlesRecommendations/fetchArticlesRecommendations';
import { articleDetailedPageReducer } from '../../model/slices';
import { ArticleDetailedPageHeader } from '../ArticleDetailedPageHeader/ArticleDetailedPageHeader';

interface IArticleDetailedPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailedPage: articleDetailedPageReducer,
};

const ArticleDetailedPage = (props: IArticleDetailedPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string; }>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);

    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useMountEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticlesRecommendations());
    });

    if (!id) {
        return (
            <Page
                className={classNames(cls.ArticleDetailedPage, {}, [className])}
            >
                {t('Такой статьи не существует')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page
                className={classNames(cls.ArticleDetailedPage, {}, [className])}
            >
                <ArticleDetailedPageHeader />
                <ArticleDetailed id={id} />
                <Text title={t('Рекомендуемые статьи')} className={cls.commentTitle} />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={cls.recommendations}
                    target="_blank"
                />
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
