import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sharedcomp4Component } from './sharedcomp4.component';

describe('Sharedcomp4Component', () => {
  let component: Sharedcomp4Component;
  let fixture: ComponentFixture<Sharedcomp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sharedcomp4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sharedcomp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
