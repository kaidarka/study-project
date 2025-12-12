import type { Preview, StoryFn } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storyBook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storyBook/RouterDecorator/RouterDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story: StoryFn) => StyleDecorator(Story),
        (Story: StoryFn) => ThemeDecorator(Theme.LIGHT)(Story),
        (Story: StoryFn) => RouterDecorator(Story),
    ],
};

export default preview;
