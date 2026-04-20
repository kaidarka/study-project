// eslint-disable-next-line path-checker-kaidarka/layer-imports
import '@/app/styles/index.scss';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (Story: any) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
