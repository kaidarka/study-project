import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
    args: {
        label: 'xzc',
        options: [
            {
                value: 'asd',
                label: 'asd',
            },
            {
                value: 'qwer',
                label: 'qwer',
            },
        ],
    },
};
