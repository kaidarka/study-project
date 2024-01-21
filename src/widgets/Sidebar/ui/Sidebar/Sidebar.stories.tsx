import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
    decorators: [
        (Story) => StoreDecorator({
            user: { authData: {} },
        })(Story),
    ],
};

export const Dark: Story = {
    decorators: [
        (Story) => ThemeDecorator(Theme.DARK)(Story),
        (Story) => StoreDecorator({
            user: { authData: {} },
        })(Story),
    ],
};

export const NoAuth: Story = {
    decorators: [
        (Story) => StoreDecorator({
            user: {},
        })(Story),
    ],
};
