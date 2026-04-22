import React from 'react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { articleDetailedReducer } from '@/entities/Article/testing';
import { addCommentFormReducer } from '@/features/AddCommentForm/testing';
import { articleDetailedPageReducer } from '@/pages/ArticleDetailedPage/testing';
import { profileReducer } from '@/features/Profile/editableProfileCard/testing';

const defaultAsyncReducers = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetailed: articleDetailedReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailedPage: articleDetailedPageReducer,
} as const satisfies ReducersList;

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (Story: any) => (
        <StoreProvider
            initialState={state}
            asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
        >
            <Story />
        </StoreProvider>
    );
