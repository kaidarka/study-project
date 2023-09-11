import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
    decorators: [
        (Story) => StoreDecorator({})(Story),
    ],
};

export const Dark: Story = {
    decorators: [
        (Story) => ThemeDecorator(Theme.DARK)(Story),
        (Story) => StoreDecorator({})(Story),
    ],
};

export const AuthLight: Story = {
    decorators: [
        (Story) => StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'asd',
                },
            },
        })(Story),
    ],
};

export const AuthDark: Story = {
    decorators: [
        (Story) => ThemeDecorator(Theme.DARK)(Story),
        (Story) => StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'asd',
                },
            },
        })(Story),
    ],
};
