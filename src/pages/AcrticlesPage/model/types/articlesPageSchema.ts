import { EntityState } from '@reduxjs/toolkit';
import {
    ArticlesViews, Article, ArticleSortField, ArticleType,
} from 'entities/Article';
import { SortOrder } from 'shared/types';

export interface ArticlesPageSchema extends EntityState<Article, string> {
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
    type: ArticleType;

    _inited: boolean;
}
