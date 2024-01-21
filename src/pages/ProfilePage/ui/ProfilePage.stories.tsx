import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    decorators: [
        (Story) => StoreDecorator({
            profile: {
                form: {
                    username: 'asd',
                    age: 123,
                    country: Country.Russia,
                    firstName: 'dsa',
                    lastName: 'dsa',
                    currency: Currency.EUR,
                    city: 'spb',
                },
            },
        })(Story),
    ],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>

export const Light: Story = {
    args: {
    },
};
export const Dark: Story = {
    args: {
    },
    decorators: [
        (Story) => ThemeDecorator(Theme.DARK)(Story),
    ],
};
