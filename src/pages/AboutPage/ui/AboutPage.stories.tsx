import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const Light: Story = {
    args: {
        children: 'Text',
    },
};
export const Dark: Story = {
    args: {
        children: 'Text',
    },
    decorators: [
        (Story) => ThemeDecorator(Theme.DARK)(Story),
    ],
};
