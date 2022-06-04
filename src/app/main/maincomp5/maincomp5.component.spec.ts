import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maincomp5Component } from './maincomp5.component';

describe('Maincomp5Component', () => {
  let component: Maincomp5Component;
  let fixture: ComponentFixture<Maincomp5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Maincomp5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Maincomp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
