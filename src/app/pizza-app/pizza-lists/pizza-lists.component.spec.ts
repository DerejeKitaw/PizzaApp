import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaListsComponent } from './pizza-lists.component';

describe('PizzaListsComponent', () => {
  let component: PizzaListsComponent;
  let fixture: ComponentFixture<PizzaListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
