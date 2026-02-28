import React from 'react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailedReducer } from 'entities/Article/model/slice/articleDetailedSlice';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slices/addCommentFormSlice';
import { articleDetailedPageReducer } from 'pages/ArticleDetailedPage/model/slices';
import { profileReducer } from 'features/Profile/editableProfileCard/model/slice/profileSlice';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetailed: articleDetailedReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailedPage: articleDetailedPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (Story: any) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <Story />
    </StoreProvider>
);
