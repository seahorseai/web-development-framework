import type { Meta, StoryObj } from '@storybook/angular';
import { AlertComponent } from './alert.component';

const meta: Meta<AlertComponent> = {
  title: 'Components/MultiStory',
  component: AlertComponent,
  argTypes: {
    message: { control: 'text' }, // Explicitly define message as a text control
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<AlertComponent>;

export const Primary: Story = {
  args: {
    message: 'This is a success alert!',
  },
};

export const Secondary: Story = {
  tags: ['!autodocs'],
  args: {
    message: 'This is a warning alert!',
  },
};

export const Tertiary: Story = {
  args: {
    message: 'This is an error alert!',
  },
};
