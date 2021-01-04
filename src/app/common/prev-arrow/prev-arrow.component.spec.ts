import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevArrowComponent } from './prev-arrow.component';

describe('PrevArrowComponent', () => {
  let component: PrevArrowComponent;
  let fixture: ComponentFixture<PrevArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevArrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
