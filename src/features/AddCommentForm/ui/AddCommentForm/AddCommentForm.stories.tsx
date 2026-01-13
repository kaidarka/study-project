import type { Meta, StoryObj, StoryFn } from '@storybook/react-webpack5';
import { StoreDecorator } from 'shared/config/storyBook/StoreDecorator/StoreDecorator';
import AddCommentForm from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Normal: Story = {
    args: {
    },
    decorators: [
        (Story: StoryFn) => StoreDecorator({
        })(Story),
    ],
};
