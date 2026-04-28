import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailedCommentsReducer } from './articleDetailedCommentsSlice';
import { articleDetailedRecommendationsReducer } from './articleDetailedRecommendationsSlice';

export const articleDetailedPageReducer = combineReducers({
    comments: articleDetailedCommentsReducer,
    recommendations: articleDetailedRecommendationsReducer,
});
