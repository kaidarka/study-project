import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
};

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Text',
    },
};

export const PrimaryDark: Story = {
    decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
    args: {
        title: 'Title',
        text: 'Text',
    },
};

export const OnlyTitleDark: Story = {
    decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
    args: {
        title: 'Title',
    },
};

export const OnlyTextDark: Story = {
    decorators: [(Story) => ThemeDecorator(Theme.DARK)(Story)],
    args: {
        text: 'Text',
    },
};

export const SizeS: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        size: TextSize.S,
    },
};

export const SizeL: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        size: TextSize.L,
    },
};
