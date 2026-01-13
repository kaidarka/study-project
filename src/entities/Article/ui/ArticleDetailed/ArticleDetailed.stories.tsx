import type { Meta, StoryObj, StoryFn } from '@storybook/react-webpack5';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { article } from '../../model/types/mocks';
import { ArticleDetailed } from './ArticleDetailed';

const meta: Meta<typeof ArticleDetailed> = {
    title: 'entities/Article/ArticleDetailed',
    component: ArticleDetailed,
};

export default meta;
type Story = StoryObj<typeof ArticleDetailed>;

export const Normal: Story = {
    args: {},
    decorators: [
        (Story: StoryFn) => StoreDecorator({
            articleDetailed: {
                data: article,
            },
        })(Story),
    ],
};

export const Loading: Story = {
    args: {},
    decorators: [
        (Story: StoryFn) => StoreDecorator({
            articleDetailed: {
                isLoading: true,
            },
        })(Story),
    ],
};

export const Error: Story = {
    args: {},
    decorators: [
        (Story: StoryFn) => StoreDecorator({
            articleDetailed: {
                error: 'some error',
            },
        })(Story),
    ],
};
