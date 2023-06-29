import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
    dataMenu = [
        {path: ['work-1'], name: 'Work 1'},
        {path: ['work-2'], name: 'Work 2'},
        {path: ['work-3'], name: 'Work 3'},
        {path: ['work-4'], name: 'Work 4'},
        {path: ['work-5'], name: 'Work 5'},
        {path: ['work-6'], name: 'Work 6'},
        {path: ['work-7'], name: 'Work 7'},
        {path: ['work-8'], name: 'Work 8'},
        {path: ['work-9'], name: 'Work 9'},
        {path: ['work-10'], name: 'Work 10'},
    ];

}
