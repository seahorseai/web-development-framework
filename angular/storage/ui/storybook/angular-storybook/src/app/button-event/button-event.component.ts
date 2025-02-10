
 


import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `<button (click)="handleClick()">{{ label }}</button>`,
  styles: [`
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
  `]
})
export class ButtonEventComponent {
  @Input() label: string = 'Click Me';
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}

