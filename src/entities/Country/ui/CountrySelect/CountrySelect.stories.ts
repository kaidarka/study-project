import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { CountrySelect } from './CountrySelect';

const meta: Meta<typeof CountrySelect> = {
    title: 'entities/CountrySelect',
    component: CountrySelect,
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const Primary: Story = {
    args: {},
};
