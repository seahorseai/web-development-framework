import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'document-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul class="document-list">
      <li *ngFor="let doc of documents">
        {{ doc.title }}
      </li>
    </ul>
  `,
  styles: [
    `
      // .document-list {
      //   list-style-type: none;
      //   padding: 0;
      // }
      // .document-list li {
      //   padding: 8px;
      //   border-bottom: 1px solid #ddd;
      // }
    `,
  ],
})
export class DocumentListComponent {
  @Input() documents: any[] = [];
}
