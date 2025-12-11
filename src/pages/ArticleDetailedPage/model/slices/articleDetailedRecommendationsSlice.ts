import {
    PayloadAction,
    createEntityAdapter, createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
    ArticleDetailedRecommendationsSchema,
} from '../types/ArticleDetailedRecommendationsSchema';
import {
    fetchArticlesRecommendations,
} from '../services/fetchArticlesRecommendations/fetchArticlesRecommendations';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => (
        state.articleDetailedPage?.recommendations || recommendationsAdapter.getInitialState()
    ),
);

const articleDetailedRecommendationsSlice = createSlice({
    name: 'articleDetailedRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailedRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticlesRecommendations.fulfilled,
                (state, action: PayloadAction<Article[]>) => {
                    state.isLoading = false;
                    recommendationsAdapter.setAll(state, action.payload);
                },
            )
            .addCase(fetchArticlesRecommendations.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: articleDetailedRecommendationsReducer,
} = articleDetailedRecommendationsSlice;
