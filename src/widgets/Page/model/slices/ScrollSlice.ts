import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSchema } from '../types/ScrollSchema';

const initialState: ScrollSchema = {
    scroll: {},
};

const ScrollSlice = createSlice({
    name: 'articlePageSlice',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload: { path, position } }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[path] = position;
        },
    },
});

export const {
    reducer: ScrollSliceReducer,
    actions: ScrollSliceActions,
} = ScrollSlice;
