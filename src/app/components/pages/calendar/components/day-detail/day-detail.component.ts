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
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.scss'],
})
export class DayDetailComponent implements OnInit, OnChanges {
  @Input() date: Date;
  @Input() appointments: Array<Appointment>;
  editMode = false;

  @Output() public addAppointment = new EventEmitter<Date>();
  @Output() public updateAppointment = new EventEmitter<Appointment>();
  @Output() public removeAppointment = new EventEmitter<Appointment>();

  displayedColumns: string[] = ['description', 'date'];
  dataSource: Appointment[];
  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem('lang')
    this.translate.setDefaultLang(lang);
  }
  ngOnInit(): void {}
  ngOnChanges() {
    this.dataSource = this.appointments;
  }
  add(): void {
    this.addAppointment.emit(moment(this.date).toDate());
  }
  update(appointment: Appointment, $key: string) {
    this.updateAppointment.emit(Object.assign({ $key }, appointment));
  }
}
