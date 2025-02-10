import { Meta, StoryObj } from '@storybook/angular';
import { within, userEvent } from '@storybook/testing-library';
import { ButtonEventComponent } from './button-event.component';

export default {
  title: 'Components/ButtonEvent',
  component: ButtonEventComponent,
  argTypes: {
    label: { control: 'text' },
    clicked: { action: 'clicked' },
  },
} as Meta<ButtonEventComponent>;

export const Default: StoryObj<ButtonEventComponent> = {
  args: {
    label: 'Click Me',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button', { name: /click me/i });

    // Simulate a user clicking the button
    await userEvent.click(button);
  },
};
