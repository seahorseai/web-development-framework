import type { Meta, StoryObj } from '@storybook/angular/';

import { ButtonArgsComponent } from './button-args.component';

const meta: Meta<ButtonArgsComponent> = {
  title: 'Components/Args',
  component: ButtonArgsComponent,
  argTypes: {
    buttonValue: { control: 'text' }, // Explicitly define message as a text control
  },
};
export default meta;


type Story = StoryObj<ButtonArgsComponent>;
export const Primary: Story = {
  args: {
    buttonValue: "button"
  },
};