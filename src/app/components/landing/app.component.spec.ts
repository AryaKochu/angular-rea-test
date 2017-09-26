import { TestBed, async } from '@angular/core/testing';
import { MdDialogModule } from '@angular/material';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MdDialogModule],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  }));

  it('should create the landing component', async(() => {
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
  it('should filter the pets "Cats" according to the gender of their owner and call sort function',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const app = fixture.debugElement.componentInstance;
      const item = {
        'price': '$726,500',
        'agency': {
          'brandingColors': {
            'primary': '#ffe512'
          },
          'logo': 'http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif'
        },
        'id': '1',
        'mainImage': 'http://main.jpg'
      };
      app.addProperties(item);
      console.log(app.result);
    }));
});
