import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta: Meta<typeof ArticlesPageFilters> = {
    title: 'pages/AcrticlesPage/ArticlesPageFilters',
    component: ArticlesPageFilters,
};

export default meta;
type Story = StoryObj<typeof ArticlesPageFilters>;

export const Normal: Story = {
    args: {},
};
