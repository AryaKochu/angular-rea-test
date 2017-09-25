import { Component, Inject, OnInit } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: '../modal/app-dialog.html'
})

export class DialogServiceComponent implements OnInit {
  buttonAction: string;
  constructor(public dialogRef: MdDialogRef<DialogServiceComponent>,
              @Inject(MD_DIALOG_DATA) private data: { text: string}) { }

  public ngOnInit() {
    this.buttonAction = this.data.text;
  }
}

