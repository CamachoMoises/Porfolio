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
import * as _ from 'lodash';
import { take } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss'],
})
export class MonthViewComponent implements OnChanges {
  @Input() month: number;
  @Input() year: number;
  @Input() appointments: Array<Appointment>;

  @Output() public selectedDay = new EventEmitter<Date>();

  weeks: Array<Array<DayWithAppointments>>;

  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem('lang')
    this.translate.setDefaultLang(lang);
  }
  ngOnChanges(simpleChanges: any): void {
    if (this.month && this.year) {
      this.weeks = this.calculateMonthWithAppointments(
        this.month,
        this.year,
        this.appointments || []
      );
    }
  }
  private calculateMonthWithAppointments(month: number, year: number, appointments: Array<Appointment>): Array<Array<DayWithAppointments>> {
    const dayOneM = moment().year(year).month(month).date(1);
    const days = Array.from({length: dayOneM.daysInMonth()}, (value, key) => key + 1);
    let res = _.groupBy(days, ((day: number) => moment().year(year).month(month).date(day).week()));
    return Object.keys(res)
        .map((key) => res[key])
        .map((days: Array<number>) => {
            let week: Array<DayWithAppointments> = Array.from({length: 7}, () => null);
            days.forEach((day) => {
                let dateM = moment().year(year).month(month).date(day);
                week[dateM.weekday()] = {
                    date: dateM.toDate(),
                    appointments: appointments.filter((appointment: Appointment) => {
                        return dateM.date() === moment(appointment.date).date();
                    }).slice(0,3)
                };
            });
            return week;
        });
}
}
