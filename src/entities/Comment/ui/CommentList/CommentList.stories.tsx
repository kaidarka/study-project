import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { CommentList } from './CommentList';

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Normal: Story = {
    args: {
        comments: [
            {
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
            {
                id: '2',
                text: 'asdgadfgadfgfads',
                user: {
                    id: '2',
                    avatar:
                        'https://img.freepik.com/premium-vector'
                        + '/man-avatar-profile-round-icon_24640-14044.jpg?w=740',
                    username: 'user',
                },
            },
        ],
    },
};

export const Loading: Story = {
    args: {
        comments: [],
        isLoading: true,
    },
};

export const NoData: Story = {
    args: {
        comments: [],
    },
};
