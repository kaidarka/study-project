import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailedData = (state: StateSchema) => state.articleDetailed?.data;
export const getArticleDetailedIsLoading = (state: StateSchema) => state.articleDetailed?.isLoading;
export const getArticleDetailedError = (state: StateSchema) => state.articleDetailed?.error;
