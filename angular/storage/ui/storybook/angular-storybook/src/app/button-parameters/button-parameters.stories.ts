

import { ButtonParametersComponent } from './button-parameters.component';
import type { Meta, StoryObj } from '@storybook/angular';


const meta: Meta<ButtonParametersComponent> = {
  title: 'Components/Parameters',
  component: ButtonParametersComponent,
  
  };

export default meta;

type Story = StoryObj<ButtonParametersComponent>;

export const Primary: Story = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'black', value: '#000' },
        { name: 'dark', value: '#222' },
        { name: 'light', value: '#ddd' },
        { name: 'white', value: '#fff' }
      ],
    },
  },
};