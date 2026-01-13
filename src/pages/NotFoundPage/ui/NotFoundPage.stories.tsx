import type { Meta, StoryObj, StoryFn } from '@storybook/react-webpack5';

import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NotFoundPage } from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Light: Story = {};
export const Dark: Story = {
    decorators: [
        (Story: StoryFn) => ThemeDecorator(Theme.DARK)(Story),
    ],
};
