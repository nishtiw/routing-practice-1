import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sharedcomp2Component } from './sharedcomp2.component';

describe('Sharedcomp2Component', () => {
  let component: Sharedcomp2Component;
  let fixture: ComponentFixture<Sharedcomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sharedcomp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sharedcomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
