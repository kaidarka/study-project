import type { Meta, StoryObj } from '@storybook/react';
import ArticlesDetailedPage from './ArticleDetailedPage';

const meta: Meta<typeof ArticlesDetailedPage> = {
    title: 'shared/ArticlesDetailedPage',
    component: ArticlesDetailedPage,
};

export default meta;
type Story = StoryObj<typeof ArticlesDetailedPage>;

export const Normal: Story = {
    args: {},
};
