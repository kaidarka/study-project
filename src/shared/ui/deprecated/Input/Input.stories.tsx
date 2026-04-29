import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
    args: {
        placeholder: 'Input value',
        value: '123',
    },
};
