import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Popover } from './Popover';
import { Button } from '../../Button/Button';

const meta: Meta<typeof Popover> = {
    title: 'shared/Popups/Popover',
    component: Popover,
    decorators: [(Story) => <div style={{}}>{Story()}</div>],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Normal: Story = {
    args: {
        buttonContent: <Button>Dropdown</Button>,
        children: (
            <div>
                <p>Any content</p>
                <Button>Click</Button>
            </div>
        ),
    },
};
