import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

export interface ArticleDetailedRecommendationsSchema extends EntityState<Article>{
    isLoading?: boolean;
    error?: string;
}
