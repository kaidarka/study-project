import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Normal: Story = {
    args: {
        comment: {
            id: '1',
            text: '12343fdwrewr',
            user: {
                id: '1',
                avatar:
                    'https://img.freepik.com/premium-vector'
                    + '/man-avatar-profile-round-icon_24640-14044.jpg?w=740',
                username: 'admin',
            },
        },
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
