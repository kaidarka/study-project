import { EntityState } from '@reduxjs/toolkit';
import { ArticlesViews, IArticle } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<IArticle>{
    isLoading?: boolean;
    error?: string;

    view: ArticlesViews;
    // pagination
    page: number;
    limit?: number;
    hasMore: boolean;

    _inited: boolean;
}
