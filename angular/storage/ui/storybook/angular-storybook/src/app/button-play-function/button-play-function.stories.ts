import type { Meta, StoryObj } from '@storybook/angular/';

import { ButtonPlayFunctionComponent } from './button-play-function.component';
import { userEvent, within } from '@storybook/test';



const meta: Meta<ButtonPlayFunctionComponent> = {
  title: 'Components/Play',
  component: ButtonPlayFunctionComponent,
  };

export default meta;
type Story = StoryObj<typeof ButtonPlayFunctionComponent>;
export const Button: Story = {
  play: async ({ canvasElement }) => {
    
    const canvas = within(canvasElement);
 
    const buttonTag = canvas.findByTitle("Button 1");

    const submitButton = canvas.getByRole('button');
 
    await userEvent.click(await buttonTag);
  },
};