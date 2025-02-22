import { Component, Input } from '@angular/core';

import { DocumentHeaderComponent } from './document-header/document-header.component';
import { DocumentListComponent } from './document-list/document-list.component';
@Component({
  selector: 'document-screen',
  standalone: true,
  imports: [  DocumentHeaderComponent, DocumentListComponent],
  template: `

      <div>
      <document-header *ngIf="document" [document]="document"></document-header>
      <document-list *ngIf="subdocuments"[documents]="subdocuments"></document-list>
      </div>

  `,
})
export class DocumentScreenComponent {
  
  

  @Input()
  document: any = { id: 0, title: 'Some Title' };

  @Input()
  subdocuments: any = [];
}