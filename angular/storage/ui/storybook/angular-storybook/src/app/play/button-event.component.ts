
 import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `<button (click)="handleClick()">{{ label }}</button>`,
  
})
export class ButtonEventComponent {
  label: string = 'Click Me';

  @Output() clicked = new EventEmitter<void>();

  handleClick() {

    this.clicked.emit();
  }

}

