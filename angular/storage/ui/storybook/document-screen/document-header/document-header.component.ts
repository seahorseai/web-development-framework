import { Component, Input } from '@angular/core';

@Component({
  selector: 'document-header',
  standalone: true,
  imports: [],
  template: `
    <div class="header">
      <h2>{{ document?.title }}</h2>
    </div>
  `,
  styles: [
    `
      // .header {
      //   background-color: #f8f8f8;
      //   padding: 12px;
      //   border-bottom: 1px solid #ddd;
      // }
    `,
  ],
})
export class DocumentHeaderComponent {
  @Input() document: any;
}
