import type { Meta, StoryObj, StoryFn } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storyBook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n'
            + 'Explicabo illo magni nam nesciunt\n'
            + 'Alias consequatur debitis, dolore ducimus ea eius\n'
            + 'eligendi facere ipsa ipsam nesciunt quidem\n'
            + 'rerum sapiente temporibus vel. A ad adipisci amet at aut\n'
            + 'commodi consequuntur deserunt ducimus eaque\n'
            + 'eligendi enim, hic iusto labore nam nemo, numquam provident\n'
            + 'quaerat quia quisquam sed sint sunt\n'
            + 'tenetur ullam unde voluptas voluptatum! Accusamus architecto\n'
            + 'consequatur deleniti dolores, doloribus\n'
            + 'eius esse, facilis minus pariatur quia quibusdam quis quos totam!\n'
            + 'Corporis culpa delectus\n'
            + 'dignissimos doloribus earum, est facilis iusto, natus nisi\n'
            + 'possimus quo repellat, soluta tempore.\n'
            + 'Corporis dicta eos quibusdam.',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n'
            + 'Explicabo illo magni nam nesciunt\n'
            + 'Alias consequatur debitis, dolore ducimus ea eius\n'
            + 'eligendi facere ipsa ipsam nesciunt quidem\n'
            + 'rerum sapiente temporibus vel. A ad adipisci amet at aut\n'
            + 'commodi consequuntur deserunt ducimus eaque\n'
            + 'eligendi enim, hic iusto labore nam nemo, numquam provident\n'
            + 'quaerat quia quisquam sed sint sunt\n'
            + 'tenetur ullam unde voluptas voluptatum! Accusamus architecto\n'
            + 'consequatur deleniti dolores, doloribus\n'
            + 'eius esse, facilis minus pariatur quia quibusdam quis quos totam!\n'
            + 'Corporis culpa delectus\n'
            + 'dignissimos doloribus earum, est facilis iusto, natus nisi\n'
            + 'possimus quo repellat, soluta tempore.\n'
            + 'Corporis dicta eos quibusdam.',
    },
    decorators: [
        (Story: StoryFn) => ThemeDecorator(Theme.DARK)(Story),
    ],
};
