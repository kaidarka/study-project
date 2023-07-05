import React from 'react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (Story: any) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
