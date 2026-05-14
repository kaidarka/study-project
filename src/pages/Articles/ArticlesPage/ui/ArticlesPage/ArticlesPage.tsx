import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useMountEffect } from '@/shared/lib/hooks/useMountEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Page } from '@/widgets/Page';
import { ArticlePageGreeting } from '@/features/Articles/articlePageGreeting';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticlesPageFilters } from '../Filters/ArticlesPageFilters';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { fetchArticlesNextPage } from '../../model/services/fetchArticlesNextPage/fetchArticlesNextPage';
import { articlePageReducer } from '../../model/slices/articlePageSlice';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from '../FiltersContainer/FiltersContainer';

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

    const content = (
        <ToggleFeatures
            name="isAppRedesigned"
            on={
                <StickyContentLayout
                    content={
                        <Page
                            className={classNames('', {}, [className])}
                            onScrollEnd={onLoadNextPart}
                        >
                            <VStack gap="md" max>
                                <ArticleInfiniteList />
                                <ArticlePageGreeting />
                            </VStack>
                        </Page>
                    }
                    left={<ViewSelectorContainer />}
                    right={<FiltersContainer />}
                />
            }
            off={
                <Page className={classNames('', {}, [className])} onScrollEnd={onLoadNextPart}>
                    <VStack gap="md" max>
                        <ArticlesPageFilters />
                        <ArticleInfiniteList />
                        <ArticlePageGreeting />
                    </VStack>
                </Page>
            }
        />
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
