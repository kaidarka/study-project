import type { Meta, StoryObj, StoryFn } from '@storybook/react-webpack5';

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
        (Story: StoryFn) => StoreDecorator({})(Story),
    ],
};

export const Dark: Story = {
    decorators: [
        (Story: StoryFn) => ThemeDecorator(Theme.DARK)(Story),
        (Story: StoryFn) => StoreDecorator({})(Story),
    ],
};

export const AuthLight: Story = {
    decorators: [
        (Story: StoryFn) => StoreDecorator({
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
        (Story: StoryFn) => ThemeDecorator(Theme.DARK)(Story),
        (Story: StoryFn) => StoreDecorator({
            user: {
                authData: {
                    id: '1',
                    username: 'asd',
                },
            },
        })(Story),
    ],
};
