import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-naming',
  standalone: true,
  imports: [ NgClass ],
  template: `

    <button [ngClass]="variant">{{ label }}</button>
  
  `,
  styles: [

    `button { padding: 10px; border-radius: 5px; cursor: pointer; }
     .primary { background: blue; color: white; }
     .secondary { background: grey; color: white; }`

  ]
})
export class ButtonNamingComponent {

  @Input() label = 'Click me';
  @Input() variant: 'primary' | 'secondary' = 'primary';

}
