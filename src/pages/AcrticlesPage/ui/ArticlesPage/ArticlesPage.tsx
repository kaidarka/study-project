import { memo, useCallback } from 'react';
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
    articlePageReducer,
} from '../../model/slices/articlePageSlice';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';

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
                    <ArticleInfiniteList />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
