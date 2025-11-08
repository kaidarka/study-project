import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './Tab';

const meta: Meta<typeof Tab> = {
    title: 'shared/Tab/Tab',
    component: Tab,
};

type Story = StoryObj<typeof Tab>;

export const Primary: Story = {
    args: {
        value: 'tab1',
        onClick: () => {},
        content: 'Tab 1',
    },
};

export const Active: Story = {
    args: {
        ...Primary.args,
        active: true,
    },
};
export default meta;
