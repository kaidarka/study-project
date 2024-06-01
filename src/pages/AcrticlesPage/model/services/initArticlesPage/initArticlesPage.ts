import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageHasInited } from '../../selectors/articlesPageSelector';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (_, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const isInited = getArticlesPageHasInited(getState());
        if (!isInited) {
            dispatch(articlePageActions.initState());
            dispatch(fetchArticlesList(
                {
                    page: 1,
                },
            ));
        }
    },
);
