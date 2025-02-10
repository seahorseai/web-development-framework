import { Component } from '@angular/core';

@Component({
  selector: 'app-email-input',
  standalone: true,
  imports: [],
  template: `
    <label for="email">Email</label>
    <input id="email" type="email" />
  `,
})
export class EmailInputComponent {}
