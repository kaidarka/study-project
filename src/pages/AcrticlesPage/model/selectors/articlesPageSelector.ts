import { StateSchema } from 'app/providers/StoreProvider';
import { ArticlesViews } from 'entities/Article';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (
    state: StateSchema,
) => state.articlesPage?.view || ArticlesViews.GRID;
