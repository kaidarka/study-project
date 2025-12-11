import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailedCommentsReducer } from './articleDetailedCommentsSlice';
import { articleDetailedRecommendationsReducer } from './articleDetailedRecommendationsSlice';
import { ArticleDetailedPageSchema } from '../types';

export const articleDetailedPageReducer = combineReducers<ArticleDetailedPageSchema>({
    comments: articleDetailedCommentsReducer,
    recommendations: articleDetailedRecommendationsReducer,
});
