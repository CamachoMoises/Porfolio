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
import { userGoogle } from '../../../../../shared/interfaces/userGoogle';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.scss'],
})
export class DayDetailComponent implements OnInit, OnChanges {
  editMode = false;
  @Input() date: Date;
  @Input() appointments: Array<Appointment>;
  @Input() activeUser: userGoogle;
  

  @Output() public addAppointment = new EventEmitter<Date>();
  @Output() public updateAppointment = new EventEmitter<Appointment>();
  @Output() public removeAppointment = new EventEmitter<Appointment>();

  displayedColumns: string[] = ['description', 'author', 'date'];
  dataSource: Appointment[];
  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem('lang');
    this.translate.setDefaultLang(lang);
  }
  ngOnInit(): void { 
  }
  ngOnChanges() {
    this.dataSource = this.appointments;
  }
  add(): void {
    this.addAppointment.emit(moment(this.date).toDate());
  }
  update(appointment: Appointment, $key: string) {
    appointment.user={
      uid:this.activeUser.uid,
      displayName:this.activeUser.displayName
    }
    this.updateAppointment.emit(Object.assign({ $key }, appointment));
  }
}
