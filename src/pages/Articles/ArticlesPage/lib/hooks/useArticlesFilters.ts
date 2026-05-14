import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelector';
import { useCallback } from 'react';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { ArticleSortField, ArticlesViews, ArticleType } from '@/entities/Article';
import { articlePageActions } from '../../model/slices/articlePageSlice';
import { SortOrder } from '@/shared/types';
import { TabItem } from '@/shared/ui/deprecated/Tab';

export function useArticlesFilters() {
    const dispatch = useAppDispatch();
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);
    const view = useSelector(getArticlesPageView);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);
    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeSort = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlePageActions.setSort(newSort));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );

    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(articlePageActions.setOrder(newOrder));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );

    const onChangeType = useCallback(
        (tab: TabItem['value']) => {
            dispatch(articlePageActions.setType(tab as ArticleType));
            dispatch(articlePageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData]
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlePageActions.setSearch(search));
            dispatch(articlePageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData]
    );

    const onChangeView = useCallback(
        (view: ArticlesViews) => {
            dispatch(articlePageActions.setView(view));
        },
        [dispatch]
    );

    return {
        sort,
        order,
        search,
        type,
        view,
        onChangeSort,
        onChangeOrder,
        onChangeType,
        onChangeSearch,
        onChangeView,
    };
}
