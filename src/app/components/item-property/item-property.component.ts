import {Component, EventEmitter, Input, Output} from '@angular/core';
import { MdDialog } from '@angular/material';

import { DialogServiceComponent } from '../modal/app-dialog.component';

@Component({
  selector: 'app-item-property',
  templateUrl: './item-property.component.html',
  styleUrls: ['./item-property.component.css']
})
export class ItemPropertyComponent {
  @Input() property: any[];
  @Output() propertyChange = new EventEmitter();
  showSavedProp: boolean;
  constructor(public dialog: MdDialog) {
    this.showSavedProp = false;
  }

  openDialog(item) {
    const dialogRef = this.dialog.open(DialogServiceComponent, {
      width: '250px',
      disableClose: true,
      data: {
        text: 'Remove'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.removeProperties(item);
    });
  }
  removeProperties(item) {
    this.dialog.closeAll();
    const index: number = this.property.indexOf(item);
    if (index !== -1) {
      this.property.splice(index, 1);
      this.showSavedProp = true;
    }
  }
}
