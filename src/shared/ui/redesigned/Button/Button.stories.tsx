import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Button, ButtonVariant } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        variant: ButtonVariant,
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        variant: ButtonVariant.clear,
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        variant: ButtonVariant.outline,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Text',
        disabled: true,
        variant: ButtonVariant.outline,
    },
};
