import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateSchema) => (
    state.articleDetailedPage?.recommendations?.isLoading
);
export const getArticleRecommendationsError = (state: StateSchema) => (
    state.articleDetailedPage?.recommendations?.error
);
