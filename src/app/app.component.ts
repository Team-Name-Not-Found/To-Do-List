import { Component } from '@angular/core';
import {DialogComponent} from './dialog/dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuClass = 'active bg-info';
  title = 'ToDo';

  constructor(public dialog: MatDialog){}

  openDialog(){
    this.dialog.open(DialogComponent);
  }

}
