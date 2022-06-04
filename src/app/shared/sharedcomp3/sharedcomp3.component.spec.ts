import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sharedcomp3Component } from './sharedcomp3.component';

describe('Sharedcomp3Component', () => {
  let component: Sharedcomp3Component;
  let fixture: ComponentFixture<Sharedcomp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sharedcomp3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sharedcomp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
