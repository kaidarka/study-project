import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    EnhancedStore, Reducer, ReducersMapObject,
    UnknownAction,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailedSchema } from 'entities/Article';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { ArticlesPageSchema } from 'pages/AcrticlesPage';
import { ScrollSchema } from 'widgets/Page';
import { ArticleDetailedPageSchema } from 'pages/ArticleDetailedPage';
import { rtkApi } from 'shared/api/rtkApi';
import { ProfileSchema } from 'features/Profile/editableProfileCard';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    scroll: ScrollSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

    // async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetailed?: ArticleDetailedSchema;
    articlesPage?: ArticlesPageSchema
    addCommentForm?: AddCommentFormSchema
    articleDetailedPage?: ArticleDetailedPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema | undefined, action: UnknownAction) => StateSchema;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
