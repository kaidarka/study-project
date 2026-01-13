import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticlesViews } from 'entities/Article';
import { ArticleListItem } from './ArticleListItem';
import { article } from '../../model/types/mocks';

const meta: Meta<typeof ArticleListItem> = {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
};

export default meta;
type Story = StoryObj<typeof ArticleListItem>;

export const Grid: Story = {
    args: {
        article,
        view: ArticlesViews.GRID,
    },
};

export const List: Story = {
    args: {
        article,
        view: ArticlesViews.LIST,
    },
};
