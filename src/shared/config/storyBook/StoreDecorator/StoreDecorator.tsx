import React from 'react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: Partial<StateSchema>) => (Story: any) => (
    <StoreProvider initialState={state}>
        <Story />
    </StoreProvider>
);
