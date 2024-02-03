import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticleById } from '../services/fetchAtricleById/fetchArticleById';
import { ArticleDetailedSchema } from '../types/articleDetailedSchema';
import { IArticle } from '../types/article';

const initialState: ArticleDetailedSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const articleDetailedSlice = createSlice({
    name: 'articleDetailed',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchArticleById.fulfilled,
                (state, action: PayloadAction<IArticle>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailedActions } = articleDetailedSlice;
export const { reducer: articleDetailedReducer } = articleDetailedSlice;
