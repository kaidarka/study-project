import type { Meta, StoryObj, StoryFn } from '@storybook/react-webpack5';

import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { AppLink, AppLinkVariant } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        variant: AppLinkVariant,
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Red: Story = {
    args: {
        children: 'Text',
        variant: AppLinkVariant.red,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
    },
    decorators: [(Story: StoryFn) => ThemeDecorator(Theme.DARK)(Story)],
};

export const RedDark: Story = {
    args: {
        children: 'Text',
        variant: AppLinkVariant.red,
    },
    decorators: [(Story: StoryFn) => ThemeDecorator(Theme.DARK)(Story)],
};
