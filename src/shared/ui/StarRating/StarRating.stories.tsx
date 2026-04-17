import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
    title: 'shared/StarRating',
    component: StarRating,
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Primary: Story = {
    args: {},
};

export const SelectedThreeStars: Story = {
    args: {
        selectedStars: 3,
    },
};

export const LargeSize: Story = {
    args: {
        size: 40,
    },
};
