import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitKComponent } from './git-k.component';

describe('GitKComponent', () => {
  let component: GitKComponent;
  let fixture: ComponentFixture<GitKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
