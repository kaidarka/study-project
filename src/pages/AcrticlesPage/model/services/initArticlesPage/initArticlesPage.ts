import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { getArticlesPageHasInited } from '../../selectors/articlesPageSelector';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const isInited = getArticlesPageHasInited(getState());
        if (!isInited) {
            const order = searchParams.get('order') as SortOrder;
            const sort = searchParams.get('sort') as ArticleSortField;
            const search = searchParams.get('search') as string;
            if (order) {
                dispatch(articlePageActions.setOrder(order));
            }
            if (sort) {
                dispatch(articlePageActions.setSort(sort));
            }
            if (search) {
                dispatch(articlePageActions.setSearch(search));
            }
            dispatch(articlePageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
