import type { Meta, StoryObj, StoryFn } from '@storybook/react-webpack5';
import { Text } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
    title: 'shared/Card',
    component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Normal: Story = {
    args: {
        children: <Text text="text" title="TITLE" />,
    },
};

export const Dark: Story = {
    args: {
        children: <Text text="text" title="TITLE" />,
    },
    decorators: [
        (Story: StoryFn) => ThemeDecorator(Theme.DARK)(Story),
    ],
};

export const Red: Story = {
    args: {
        children: <Text text="text" title="TITLE" />,
    },
    decorators: [
        (Story: StoryFn) => ThemeDecorator(Theme.RED)(Story),
    ],
};
