import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPropertyComponent } from './item-property.component';

describe('ItemPropertyComponent', () => {
  let component: ItemPropertyComponent;
  let fixture: ComponentFixture<ItemPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('properties should be removed when clicking remove button', () => {

  })
});
