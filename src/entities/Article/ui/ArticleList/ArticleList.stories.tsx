import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticlesViews } from 'entities/Article';
import { ArticleList } from './ArticleList';
import { article } from '../../model/types/mocks';

const meta: Meta<typeof ArticleList> = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

export const Grid: Story = {
    args: {
        articles: [article, { ...article, id: '2' }],
        view: ArticlesViews.GRID,
    },
};

export const List: Story = {
    args: {
        articles: [article, { ...article, id: '2' }],
        view: ArticlesViews.LIST,
    },
};

export const GridLoading: Story = {
    args: {
        view: ArticlesViews.GRID,
        isLoading: true,
    },
};

export const ListLoading: Story = {
    args: {
        view: ArticlesViews.LIST,
        isLoading: true,
    },
};
