import { EntityState } from '@reduxjs/toolkit';
import { ArticlesViews, IArticle } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<IArticle>{
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit?: number;
    hasMore: boolean;
    // filters
    view: ArticlesViews;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;

    _inited: boolean;
}
