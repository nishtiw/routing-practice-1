import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maincomp6Component } from './maincomp6.component';

describe('Maincomp6Component', () => {
  let component: Maincomp6Component;
  let fixture: ComponentFixture<Maincomp6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Maincomp6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Maincomp6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
