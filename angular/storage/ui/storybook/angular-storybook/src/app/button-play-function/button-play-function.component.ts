import { Component } from '@angular/core';

@Component({
  selector: 'app-button-play-function',
  standalone: true,
  imports: [],
  template: `

    <button #btn1 id="btn1" (click)="toggle(btn1)" class="someclass">Button 1</button>
  
  `
})
export class ButtonPlayFunctionComponent {

  buttonValue: string | undefined;
  
  toggle(button: { id: string | undefined; }) {
    this.buttonValue = button.id;
  }

}
