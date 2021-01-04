import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextArrowComponent } from './next-arrow.component';

describe('NextArrowComponent', () => {
  let component: NextArrowComponent;
  let fixture: ComponentFixture<NextArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextArrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
