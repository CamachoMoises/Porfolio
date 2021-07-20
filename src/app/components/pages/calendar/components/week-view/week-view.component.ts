import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  OnChanges,
} from '@angular/core';
import { Appointment } from '../../types/appointment.type';
import { DayWithAppointments } from '../../types/day-with-appointments.type';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss'],
})
export class WeekViewComponent implements OnChanges {
  @Input() week: number;
  @Input() year: number;
  @Input() appointments: Array<Appointment>;

  @Output() public selectedDay = new EventEmitter<Date>();

  days: Array<DayWithAppointments> = [];
  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem('lang')
    this.translate.setDefaultLang(lang);
  }
  ngOnChanges(simpleChanges: any): void {
    if (this.week && this.year) {
      this.days = this.calculateDaysWithAppointments(
        this.week,
        this.year,
        this.appointments || []
      );
    }
  }
  private calculateDaysWithAppointments(
    week: number,
    year: number,
    appointments: Array<Appointment>
  ): Array<DayWithAppointments> {
    let sundayM = moment().year(year).week(week).startOf('week');

    return Array.from({ length: 7 }, () => null).map((val, i) => {
      return {
        date:
          i > 0
            ? moment(sundayM.toDate()).add(i, 'days').toDate()
            : sundayM.toDate(),
        appointments: appointments.filter((appointment: Appointment) => {
          return (
            moment(sundayM.toDate()).weekday(i).date() ===
            moment(appointment.date).date()
          );
        }),
      };
    });
  }
}
