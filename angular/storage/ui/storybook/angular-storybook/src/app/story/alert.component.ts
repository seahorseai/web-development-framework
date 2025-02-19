import { Component, Input } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [NgbAlertModule],
  template: `
    
    <ngb-alert [dismissible]="false">
	  <strong>{{ message }}</strong> Better check yourself, you're not looking too good.
    </ngb-alert>

  `,
 
})
export class AlertComponent {
  @Input() message: string | undefined;

}
