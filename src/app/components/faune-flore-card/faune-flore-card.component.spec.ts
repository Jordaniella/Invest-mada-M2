import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FauneFloreCardComponent } from './faune-flore-card.component';

describe('FauneFloreCardComponent', () => {
  let component: FauneFloreCardComponent;
  let fixture: ComponentFixture<FauneFloreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FauneFloreCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FauneFloreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
