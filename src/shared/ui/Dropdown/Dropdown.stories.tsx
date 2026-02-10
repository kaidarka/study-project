import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import { Dropdown, DropdownAnchor } from './Dropdown';
import { Button } from '../Button/Button';

const meta: Meta<typeof Dropdown> = {
    title: 'shared/Dropdown',
    component: Dropdown,
    decorators: [
        (Story: StoryFn) => (
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
            }}
            >
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Normal: Story = {
    args: {
        buttonContent: <Button>Dropdown</Button>,
        items: [
            {
                content: '123',
                onClick: () => {
                    console.log('123');
                },
            },
            {
                content: '456',
                onClick: () => {
                    console.log('456');
                },
            },
        ],
    },
};

export const BottomEnd: Story = {
    args: {
        buttonContent: <Button>Dropdown</Button>,
        items: [
            {
                content: '123',
                onClick: () => {
                    console.log('123');
                },
            },
        ],
        anchor: DropdownAnchor.BOTTOM_END,
    },
};

export const TopEnd: Story = {
    args: {
        buttonContent: <Button>Dropdown</Button>,
        items: [
            {
                content: '123',
                onClick: () => {
                    console.log('123');
                },
            },
        ],
        anchor: DropdownAnchor.TOP_END,
    },
};

export const BottomStart: Story = {
    args: {
        buttonContent: <Button>Dropdown</Button>,
        items: [
            {
                content: '123',
                onClick: () => {
                    console.log('123');
                },
            },
        ],
        anchor: DropdownAnchor.BOTTOM_START,
    },
};

export const TopStart: Story = {
    args: {
        buttonContent: <Button>Dropdown</Button>,
        items: [
            {
                content: '123',
                onClick: () => {
                    console.log('123');
                },
            },
        ],
        anchor: DropdownAnchor.TOP_START,
    },
};
