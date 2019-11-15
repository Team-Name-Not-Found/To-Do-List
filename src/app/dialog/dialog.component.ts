import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `
  <h1 md-dialog-title> title</h1>
  <md-dialog-content>  
    hey this is the content of the dialog
  </md-dialog-content>
  <md-dialog-actions>
    <button md-raised-button md-dialog-close>
      close button
    </button>  
  </md-dialog-actions>
  `,
  styles: []
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
