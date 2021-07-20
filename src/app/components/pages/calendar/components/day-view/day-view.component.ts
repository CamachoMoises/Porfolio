import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { Appointment } from '../../types/appointment.type';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss'],
})
export class DayViewComponent implements OnChanges {
  @Input() date: Date;
  @Input() appointments: Array<Appointment>;

  @Output() public addAppointment = new EventEmitter<Date>();
  @Output() public updateAppointment = new EventEmitter<Appointment>();
  @Output() public removeAppointment = new EventEmitter<Appointment>();
  newAppointments;
  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem('lang')
    this.translate.setDefaultLang(lang);
  }

  ngOnChanges(simpleChanges: any) {
    this.newAppointments = this.appointments;
  }
}
