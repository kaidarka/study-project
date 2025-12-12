import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'shared/Tab/Tabs',
    component: Tabs,
};

type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
    args: {
        tabs: [
            {
                value: 'tab1',
                content: 'Tab 1',
            },
            {
                value: 'tab2',
                content: 'Tab 2',
            },
        ],
        value: 'tab1',
    },
};

export const ValueChanged: Story = {
    args: {
        ...Primary.args,
        value: 'tab2',
    },
};
export default meta;
