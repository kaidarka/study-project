import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticleType } from '../../model/types/article';
import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta: Meta<typeof ArticleTypeTabs> = {
    title: 'entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
};

export default meta;
type Story = StoryObj<typeof ArticleTypeTabs>;

export const Normal: Story = {
    args: { value: ArticleType.ALL, onTabClick: () => {} },
};
