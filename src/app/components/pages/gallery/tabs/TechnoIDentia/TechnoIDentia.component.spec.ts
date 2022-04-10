/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TechnoIDentiaComponent } from './TechnoIDentia.component';

describe('TechnoIDentiaComponent', () => {
  let component: TechnoIDentiaComponent;
  let fixture: ComponentFixture<TechnoIDentiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnoIDentiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnoIDentiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
