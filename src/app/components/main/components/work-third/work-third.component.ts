import { Component } from '@angular/core';

@Component({
  selector: 'app-work-third',
  templateUrl: './work-third.component.html',
  styleUrls: ['./work-third.component.scss']
})
export class WorkThirdComponent {
    counter = 0;

    changeCounter(): void {
        this.counter++;
    }
}
