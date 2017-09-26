import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MdDialogModule } from '@angular/material';

import { ItemPropertyComponent } from './item-property.component';

describe('ItemPropertyComponent', () => {
  let app: ItemPropertyComponent;
  let fixture: ComponentFixture<ItemPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MdDialogModule],
      declarations: [ ItemPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPropertyComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(app).toBeTruthy();
  });

  it('properties should be removed when clicking remove button', () => {
    async(() => {
      const item = [{
        'price': '$526,500',
        'agency': {
          'brandingColors': {
            'primary': '#000000'
          },
          'logo': 'http://iabc.gif'
        },
        'id': '4',
        'mainImage': 'http://main.jpg'
      }];
      app.removeProperties(item);
      expect(app.property.length).toEqual(0);
    });
  });
});
