import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PopupDialogComponent} from "../popup-dialog/popup-dialog.component";

@Component({
  selector: 'app-work-second',
  templateUrl: './work-second.component.html',
  styleUrls: ['./work-second.component.scss']
})
export class WorkSecondComponent {
    constructor(
        private dialog: MatDialog
    ) { }

    openDialog(typeContent: string): void {
        let data = {};
        switch (typeContent) {
            case 'text':
                data = { title: 'Text', message: 'Text pressed' };
                break;
            case 'button':
                data = { title: 'Button', message: 'Button pressed' };
        }
        this.dialog.open(PopupDialogComponent, {
            width: '400px',
            data
        }).afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
