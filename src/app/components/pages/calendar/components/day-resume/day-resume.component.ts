import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { Appointment } from '../../types/appointment.type';
import * as moment from 'moment';

@Component({
  selector: 'app-day-resume',
  templateUrl: './day-resume.component.html',
  styleUrls: ['./day-resume.component.scss']
})
export class DayResumeComponent implements OnInit {
  @Input() date: Date;
  @Input() appointments: Array<Appointment>;
  editMode = false;

  @Output() public selectedDay = new EventEmitter<Date>();
  

  constructor() { }

  ngOnInit() {
  }
  selectDay(){
    this.selectedDay.emit(this.date)
  }

}
