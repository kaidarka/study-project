import type { Meta, StoryObj, StoryFn } from '@storybook/react-webpack5';
import { ThemeDecorator } from '@/shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Text, TextSize, TextVariant } from './Text';

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
        theme: TextVariant.error,
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
    decorators: [(Story: StoryFn) => ThemeDecorator(Theme.DARK)(Story)],
    args: {
        title: 'Title',
        text: 'Text',
    },
};

export const OnlyTitleDark: Story = {
    decorators: [(Story: StoryFn) => ThemeDecorator(Theme.DARK)(Story)],
    args: {
        title: 'Title',
    },
};

export const OnlyTextDark: Story = {
    decorators: [(Story: StoryFn) => ThemeDecorator(Theme.DARK)(Story)],
    args: {
        text: 'Text',
    },
};

export const SizeS: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        size: TextSize.sm,
    },
};

export const SizeL: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        size: TextSize.lg,
    },
};
