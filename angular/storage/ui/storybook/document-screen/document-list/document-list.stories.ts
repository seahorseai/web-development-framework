import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { DocumentListComponent } from './document-list.component';

export default {

  title: 'Components/DocumentScreen/DocumentList',
  component: DocumentListComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    documents: { control: 'object' },
  },
} as Meta<DocumentListComponent>;




export const list: StoryObj<DocumentListComponent> = {
  args: {
      documents: [
        { title: 'Document 1' },
        { title: 'Document 2' },
        { title: 'Document 3' },
      ],
  },
}