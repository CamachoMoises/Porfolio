import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataKComponent } from './data-k.component';

describe('DataKComponent', () => {
  let component: DataKComponent;
  let fixture: ComponentFixture<DataKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
