import { Component } from '@angular/core';

@Component({
  selector: 'app-button-parameters',
  standalone: true,
  imports: [],
  template: `

    <button #btn1 id="btn1" (click)="toggle(btn1)" class="someclass">Button 1</button>
  
  `,
  styles: ['p {font-family: Lato;}'
]
})
export class ButtonParametersComponent {

  buttonValue: string | undefined;
  
  toggle(button: { id: string | undefined; }) {
    this.buttonValue = button.id;
  }

}
