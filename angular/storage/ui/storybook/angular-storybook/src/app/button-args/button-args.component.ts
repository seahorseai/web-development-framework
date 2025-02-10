import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-args',
  standalone: true,
  imports: [],
  template: `

  <button #btn1 id="btn1" (click)="toggle(btn1)" class="someclass">Button 1</button>
  <div>
  <strong>{{ buttonValue }}</strong>
</div>

`,
styles: ['p {font-family: Lato;}']
  
})
export class ButtonArgsComponent {

  @Input() buttonValue: string | undefined;
  
  

  
  constructor(){
    console.log(this.buttonValue)
  }
  
  toggle(button: { id: string | undefined; }) {
    this.buttonValue = button.id;
    console.log(this.buttonValue)
  }

  

}
