/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DayResumeComponent } from './day-resume.component';

describe('DayResumeComponent', () => {
  let component: DayResumeComponent;
  let fixture: ComponentFixture<DayResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
