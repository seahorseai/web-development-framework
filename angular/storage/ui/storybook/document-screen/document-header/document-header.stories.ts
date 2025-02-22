import { Meta, StoryObj } from '@storybook/angular';
import { DocumentHeaderComponent } from './document-header.component';

export default {
  title: 'Components/DocumentScreen/DocumentHeader',
  component: DocumentHeaderComponent,
  tags: ['autodocs'],
  argTypes: {
    document: { control: 'object' },
  },
} as Meta<DocumentHeaderComponent> ;


export const title: StoryObj<DocumentHeaderComponent> = {
  args: {
    document: { title: 'Sample Document' },
  },
};

