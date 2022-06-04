import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maincomp4Component } from './maincomp4.component';

describe('Maincomp4Component', () => {
  let component: Maincomp4Component;
  let fixture: ComponentFixture<Maincomp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Maincomp4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Maincomp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
