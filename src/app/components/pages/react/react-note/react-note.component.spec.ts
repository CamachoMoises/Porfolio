import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactNoteComponent } from './react-note.component';

describe('ReactNoteComponent', () => {
  let component: ReactNoteComponent;
  let fixture: ComponentFixture<ReactNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
