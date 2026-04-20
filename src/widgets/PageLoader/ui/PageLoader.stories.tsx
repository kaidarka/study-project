import type { Meta, StoryObj, StoryFn } from '@storybook/react-webpack5';

import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { PageLoader } from './PageLoader';

const meta: Meta<typeof PageLoader> = {
    title: 'widgets/PageLoader',
    component: PageLoader,
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [
        (Story: StoryFn) => ThemeDecorator(Theme.DARK)(Story),
    ],
};
