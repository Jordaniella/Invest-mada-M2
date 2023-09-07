import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarProductsComponent } from './calendar-products.component';

describe('CalendarProductsComponent', () => {
  let component: CalendarProductsComponent;
  let fixture: ComponentFixture<CalendarProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
