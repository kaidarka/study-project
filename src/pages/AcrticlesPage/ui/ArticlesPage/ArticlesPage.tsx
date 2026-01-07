import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from 'shared/lib/classNames/classNames';
import { useMountEffect } from 'shared/lib/hooks/useMountEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Page } from 'widgets/Page';
import { ArticlesPageFilters } from 'pages/AcrticlesPage/ui/Filters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';
import { VStack } from 'shared/ui/Stack';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import {
    fetchArticlesNextPage,
} from '../../model/services/fetchArticlesNextPage/fetchArticlesNextPage';
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelector';
import {
    articlePageReducer,
    getArticles,
} from '../../model/slices/articlePageSlice';

interface IArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};

const ArticlesPage = (props: IArticlesPageProps) => {
    const { className } = props;
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchArticlesNextPage());
    }, [dispatch]);

    useMountEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                className={classNames('', {}, [className])}
                onScrollEnd={onLoadNextPart}
            >
                <VStack gap="md" max>
                    <ArticlesPageFilters />
                    <ArticleList
                        isLoading={isLoading}
                        view={view}
                        articles={articles}
                    />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
