import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-args',
  standalone: true,
  imports: [],
  template: `

  <button>Button 1</button>
  <div>
  <strong>{{ storybookArg }}</strong>
</div>

`
  
})
export class ButtonArgsComponent {

  storybookArg: string | undefined;
  
}
