import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sharedcomp5Component } from './sharedcomp5.component';

describe('Sharedcomp5Component', () => {
  let component: Sharedcomp5Component;
  let fixture: ComponentFixture<Sharedcomp5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sharedcomp5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sharedcomp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
