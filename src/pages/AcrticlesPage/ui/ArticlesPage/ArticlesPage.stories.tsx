import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { ArticlesViews } from 'entities/Article';
import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Normal: Story = {
    args: {},
    decorators: [
        (Story) => StoreDecorator({
            articlesPage: {
                view: ArticlesViews.LIST,
                entities: {},
            },
        })(Story),
    ],
};
