import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
    args: {
        text: 'import { classNames } from \'shared/lib/classNames/classNames\';\n'
            + 'import { memo } from \'react\';\n'
            + 'import cls from \'./Code.module.scss\';\n'
            + '\n'
            + 'export const Code = memo((props: ICodeProps) => {\n'
            + '    const { className, text } = props;\n'
            + '    return (\n'
            + '        <code\n'
            + '            className={classNames(cls.Code, {}, [className])}\n'
            + '        >\n'
            + '            {text}\n'
            + '        </code>\n'
            + '    );\n'
            + '});\n',
    },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => ThemeDecorator(Theme.DARK)(Story),
    ],
};

export const Red: Story = {
    args: {},
    decorators: [
        (Story) => ThemeDecorator(Theme.RED)(Story),
    ],
};
