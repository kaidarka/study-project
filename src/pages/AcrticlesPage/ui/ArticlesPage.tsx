import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { ArticleList, ArticlesViews, ArticleViewSelector } from 'entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';
import { useMountEffect } from 'shared/lib/hooks/useMountEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Page } from 'shared/ui/Page/Page';
import {
    fetchArticlesNextPage,
} from '../model/services/fetchArticlesNextPage/fetchArticlesNextPage';
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../model/selectors/articlesPageSelector';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import {
    articlePageActions,
    articlePageReducer,
    getArticles,
} from '../model/slices/articlePageSlice';
import cls from './ArticlesPage.module.scss';

interface IArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage = (props: IArticlesPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchArticlesNextPage());
    }, [dispatch]);

    useMountEffect(() => {
        dispatch(articlePageActions.initState());
        dispatch(fetchArticlesList(
            {
                page: 1,
            },
        ));
    });

    const onChangeView = useCallback((view: ArticlesViews) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                className={classNames(cls.ArticlesPage, {}, [className])}
                onScrollEnd={onLoadNextPart}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
