import { IArticle } from './article';

export interface ArticleDetailedSchema {
    isLoading: boolean;
    error?: string;
    data?: IArticle;
}
