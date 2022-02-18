import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackKComponent } from './back-k.component';

describe('BackKComponent', () => {
  let component: BackKComponent;
  let fixture: ComponentFixture<BackKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
