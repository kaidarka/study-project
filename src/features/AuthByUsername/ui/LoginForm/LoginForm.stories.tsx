import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {
    },
    decorators: [
        (Story) => StoreDecorator({
            loginForm: {
                username: 'asdf',
                password: 'asdf',
                isLoading: false,
            },
        })(Story),
    ],
};

export const WithError: Story = {
    args: {
    },
    decorators: [
        (Story) => StoreDecorator({
            loginForm: {
                username: 'asdf',
                password: 'asdf',
                isLoading: false,
                error: 'error',
            },
        })(Story),
    ],
};

export const WithLoading: Story = {
    args: {
    },
    decorators: [
        (Story) => StoreDecorator({
            loginForm: {
                username: '',
                password: '',
                isLoading: true,
                error: 'error',
            },
        })(Story),
    ],
};
