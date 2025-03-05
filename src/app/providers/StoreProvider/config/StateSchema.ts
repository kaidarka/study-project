import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailedSchema } from 'entities/Article';
import { ArticleDetailedCommentsSchema } from 'pages/ArticleDetailedPage';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { ArticlesPageSchema } from 'pages/AcrticlesPage';
import { ScrollSchema } from 'widgets/Page';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    scroll: ScrollSchema;

    // async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetailed?: ArticleDetailedSchema;
    articleDetailedComments?: ArticleDetailedCommentsSchema;
    articlesPage?: ArticlesPageSchema
    addCommentForm?: AddCommentFormSchema
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
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
