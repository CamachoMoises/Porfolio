import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontKComponent } from './front-k.component';

describe('FrontKComponent', () => {
  let component: FrontKComponent;
  let fixture: ComponentFixture<FrontKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
