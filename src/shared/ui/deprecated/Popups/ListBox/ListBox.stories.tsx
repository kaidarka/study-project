import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
    title: 'shared/Popups/ListBox',
    component: ListBox,
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Normal: Story = {
    args: {
        items: [
            { content: '1 asdasdadad', value: '1' },
            { content: '2qweqweqwee', value: '2', disabled: true },
        ],
        value: '1',
        onChange: () => {
            console.log('onChange');
        },
        placeholder: 'Select...',
        readonly: false,
        label: 'Label',
    },
};
