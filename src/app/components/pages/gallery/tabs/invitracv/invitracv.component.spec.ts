/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InvitracvComponent } from './invitracv.component';

describe('InvitracvComponent', () => {
  let component: InvitracvComponent;
  let fixture: ComponentFixture<InvitracvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitracvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitracvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
