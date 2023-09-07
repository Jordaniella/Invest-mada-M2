import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FauneFloreComponent } from './faune-flore.component';

describe('FauneFloreComponent', () => {
  let component: FauneFloreComponent;
  let fixture: ComponentFixture<FauneFloreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FauneFloreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FauneFloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
