import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sharedcomp6Component } from './sharedcomp6.component';

describe('Sharedcomp6Component', () => {
  let component: Sharedcomp6Component;
  let fixture: ComponentFixture<Sharedcomp6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sharedcomp6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sharedcomp6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
