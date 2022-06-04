import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maincomp3Component } from './maincomp3.component';

describe('Maincomp3Component', () => {
  let component: Maincomp3Component;
  let fixture: ComponentFixture<Maincomp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Maincomp3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Maincomp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
