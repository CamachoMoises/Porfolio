/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProlixComponent } from './prolix.component';

describe('ProlixComponent', () => {
  let component: ProlixComponent;
  let fixture: ComponentFixture<ProlixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProlixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProlixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
