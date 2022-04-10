/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HogwartsComponent } from './Hogwarts.component';

describe('HogwartsComponent', () => {
  let component: HogwartsComponent;
  let fixture: ComponentFixture<HogwartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HogwartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HogwartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
