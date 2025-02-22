import type { Meta, StoryObj } from '@storybook/angular';
import { DocumentScreenComponent } from './document-screen.component';
import * as DocumentHeader from './document-header/document-header.stories'; 
import * as DocumentList from './document-list/document-list.stories'; 



export default {
  title: 'Components/DocumentScreen',
  component: DocumentScreenComponent,
} as Meta<DocumentScreenComponent>;


export const simple: StoryObj<DocumentScreenComponent> = {
  args: {
    
    document: DocumentHeader.title.args?.document,
    subdocuments: DocumentList.list.args?.documents
  },
};