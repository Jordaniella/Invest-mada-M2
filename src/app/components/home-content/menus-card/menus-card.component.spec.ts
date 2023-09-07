import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusCardComponent } from './menus-card.component';

describe('MenusCardComponent', () => {
  let component: MenusCardComponent;
  let fixture: ComponentFixture<MenusCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
