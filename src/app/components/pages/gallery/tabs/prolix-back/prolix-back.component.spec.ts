/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProlixBackComponent } from './prolix-back.component';

describe('ProlixBackComponent', () => {
  let component: ProlixBackComponent;
  let fixture: ComponentFixture<ProlixBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProlixBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProlixBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
