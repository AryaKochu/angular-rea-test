import { TestBed, async } from '@angular/core/testing';
import { MdDialog } from '@angular/material';

import { AppComponent } from './app.component';
import { DialogServiceComponent } from '../modal/app-dialog.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MdDialog],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('it should trigger the click event on ADD: ', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    spyOn(app, 'addProperties');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(app.addProperties).toHaveBeenCalled();
    });
  });
});
