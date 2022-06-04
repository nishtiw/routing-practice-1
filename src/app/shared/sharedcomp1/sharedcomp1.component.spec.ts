import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sharedcomp1Component } from './sharedcomp1.component';

describe('Sharedcomp1Component', () => {
  let component: Sharedcomp1Component;
  let fixture: ComponentFixture<Sharedcomp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sharedcomp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sharedcomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
