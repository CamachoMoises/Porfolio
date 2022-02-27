import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareFacilityComponent } from './software-facility.component';

describe('SoftwareFacilityComponent', () => {
  let component: SoftwareFacilityComponent;
  let fixture: ComponentFixture<SoftwareFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareFacilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
