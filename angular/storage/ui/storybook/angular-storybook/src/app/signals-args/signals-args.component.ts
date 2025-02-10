import { Component, Input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signals-args',
  standalone: true,
  imports: [],
  template: `

  <div>
    <h2>Counter: {{ counter() }}</h2>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset</button>
  </div>

  
  `
})
export class SignalsArgsComponent implements OnInit {

  
  


  initialCount = 0; 

  // Define a signal of type number with an initial value of 0
  counter = signal<number>(0);

  ngOnInit() {
    this.counter.set(this.initialCount); // Set initial value
  }

  increment() {
    this.counter.set(this.counter() + 1);
  }

  decrement() {
    this.counter.set(this.counter() - 1);
  }

  reset() {
    this.counter.set(this.initialCount);
  }

}
