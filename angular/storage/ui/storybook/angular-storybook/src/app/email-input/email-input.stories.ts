import { Meta, StoryObj } from '@storybook/angular';
import { EmailInputComponent } from './email-input.component';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Components/Email Input',
  component: EmailInputComponent,
} as Meta<EmailInputComponent>;

export const Default: StoryObj<EmailInputComponent> = {};



export const WithInteraction: StoryObj<EmailInputComponent> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Select the email input by its label text
    const emailInput = canvas.getByLabelText('Email');

    // Simulate user typing an email
    await userEvent.type(emailInput, 'test@example.com');
  },
};
