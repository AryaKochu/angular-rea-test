import { Component, Input } from '@angular/core';
import {MdDialog } from '@angular/material';

import {AppService} from '../../../services/app.service';
import { DialogServiceComponent } from '../modal/app-dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  @Input() result: {
    results: any[],
    saved: any[]
  };
  count: number;
  constructor(private service: AppService,
              public dialog: MdDialog) {
    this.count = 0;
    this.result = {
      results: [],
      saved: []
    }
    service.fetchDataJSON().subscribe(res => { // service call to invoke http request to fetch the data
      this.result = res;
    });
  }
  openDialog(item) {
    console.log(item);
    const dialogRef = this.dialog.open(DialogServiceComponent, {
      width: '250px',
      disableClose: true,
      data: {
        text: 'Add'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addProperties(item);
    });
  }
  addProperties(item) {
    this.dialog.closeAll();
    this.result.saved.push(item);
  }
}
