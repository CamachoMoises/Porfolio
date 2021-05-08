import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { VIEW_MODE } from './types/constants';
import { AngularFireDatabase } from '@angular/fire/database';
import { mergeMap, map, shareReplay } from 'rxjs/operators';
import * as moment from 'moment';
import Moment = moment.Moment;
import { Appointment } from './types/appointment.type';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  date: Date = new Date();
  VIEW_MODE = VIEW_MODE;
  viewMode = 'MONTH'
  viewMode$ = new BehaviorSubject(VIEW_MODE.MONTH);
  navigation$ = new BehaviorSubject<number>(0);
  searchTerm$ = new BehaviorSubject('');
  filter;
  zoom: number = 14;
  lat: number = 44.445248;
  lng: number = 26.099672;
  focus;
  focus1;
  private currentDateM$ = this.viewMode$.pipe(
    mergeMap((viewMode: string) => {
      let dateM = moment();
      return this.navigation$.pipe(
        map((action: number) => {
          switch (viewMode) {
            case VIEW_MODE.MONTH:
              return dateM.startOf('month').add(action, 'months');
            case VIEW_MODE.WEEK:
              return dateM.startOf('week').add(action, 'weeks');
            case VIEW_MODE.DAY:
              return dateM.startOf('day').add(action, 'days');
          }
          return dateM;
        })
      );
    }),
    shareReplay()
  );

  currentDate$ = this.currentDateM$.pipe(map((dateM) => dateM.toDate()));
  currentYear$ = this.currentDateM$.pipe(map((dateM) => dateM.year()));
  currentMonth$ = this.currentDateM$.pipe(map((dateM) => dateM.month()));
  currentWeek$ = this.currentDateM$.pipe(map((dateM) => dateM.week()));
  appointments$ = this.db
    .list('/appointments')
    .snapshotChanges()
    .pipe(
      map((data) => data.
        map(val => {
          const data: any = val.payload.val();
          data.$key = val.payload.key;
          return data
        })));


  appointmentChange$ = this.db.list('/appointments');
  filteredAppointments$ = combineLatest([
    this.viewMode$,
    this.currentDateM$,
    this.appointments$,
    this.searchTerm$,
  ])
    .pipe(
      map((val) => {
        switch (val[0]) {
          case 'MONTH':
            return val[2]
              .filter(
                (item: Appointment) =>
                  moment(item.date).format('MM/YYYY') ===
                  val[1].format('MM/YYYY')
              )
              .filter((item) => this.filterByTerm(item, val[3]));
          case 'WEEK':
            return val[2]
              .filter(
                (item: Appointment) =>
                  moment(item.date).format('ww/YYYY') ===
                  val[1].format('ww/YYYY')
              )
              .filter((item) => this.filterByTerm(item, val[3]));
          case 'DAY':
            return val[2]
              .filter(
                (item: Appointment) =>
                  moment(item.date).format('DD/MM/YYYY') ===
                  val[1].format('DD/MM/YYYY')
              )
              .filter((item) => this.filterByTerm(item, val[3]));
        }
      }),
      shareReplay()
    )
    .subscribe((val) => {
      this.filter = val;
      console.log(this.filter.length);

      this.appointments$.subscribe((val) => {
      });
    });


  constructor(
    private db: AngularFireDatabase,
  ) { }

  ngOnInit(): void {
    this.filteredAppointments$;
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

  private filterByTerm(appointment, term: string): boolean {
    return (
      appointment.description.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  }

  onSetViewMode(viewMode: string, date?: Date): void {
    this.viewMode = viewMode;
    if (date) {
      const newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      const oldDate = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate());
      let steps = moment(newDate).diff(moment(oldDate), 'days');
      console.log('mayor', steps);
      this.navigation$.next(steps);
    }
    else {
      this.navigation$.next(0);
    }
    this.viewMode$.next(viewMode);
  }

  onPrevious(): void {
    this.navigation$.next(-1);
  }

  onNext(): void {
    this.navigation$.next(1);
  }

  onSearchChanged(e: string): void {
    this.searchTerm$.next(e);
  }

  onRemoveAppointment(id: any): void {
    this.appointmentChange$.remove(id);
  }

  onAddAppointment(date: Date): void {
    this.appointmentChange$.push(new Appointment(date.toDateString(), ''));
  }

  onUpdateAppointment(appointment: Appointment): void {
    this.db.object('appointments/' + appointment.$key).set({
      description: appointment.description,
      date: appointment.date,
    });
  }
}
