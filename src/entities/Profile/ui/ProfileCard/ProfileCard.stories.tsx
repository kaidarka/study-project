import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatarImage from 'shared/ui/Avatar/avatar.png';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
            username: 'asd',
            age: 123,
            country: Country.Russia,
            firstName: 'dsa',
            lastName: 'dsa',
            currency: Currency.EUR,
            city: 'spb',
            avatar: avatarImage,
        },
    },
};

export const WithError: Story = {
    args: {
        error: 'true',
    },
};

export const WithLoading: Story = {
    args: {
        isLoading: true,
    },
};
