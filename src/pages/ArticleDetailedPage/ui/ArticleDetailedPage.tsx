import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetailed } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useMountEffect } from 'shared/lib/hooks/useMountEffect';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailedPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import cls from './ArticleDetailedPage.module.scss';
import {
    articleDetailedCommentsReducer,
    getArticleComments,
} from '../model/slices/articleDetailedCommentsSlice';
import {
    getArticleCommentsError,
    getArticleCommentsIsLoading,
} from '../model/selectors/comments';

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

    useMountEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });
    if (!id) {
        return (
            <div
                className={classNames(cls.ArticlesDetailedPage, {}, [className])}
            >
                {t('Такой статьи не существует')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div
                className={classNames(cls.ArticlesDetailedPage, {}, [className])}
            >
                <ArticleDetailed id={id} />
                <Text title={t('Комментарии')} className={cls.commentTitle} />
                {commentsError
                    ? <Text text={t('Ошибка загрузки комментариев')} />
                    : (
                        <CommentList
                            comments={comments}
                            isLoading={commentsIsLoading}
                        />
                    )}
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailedPage);
