import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MdDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';

import { AppComponent } from './components/landing/app.component';
import { DialogServiceComponent } from './components/modal/app-dialog.component';
import { AppService } from '../services/app.service';
import { ItemPropertyComponent } from './components/item-property/item-property.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemPropertyComponent,
    DialogServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdDialogModule
  ],
  entryComponents: [ DialogServiceComponent ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
