import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, timer } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { VIEW_MODE } from './types/constants';
import { AngularFireDatabase } from '@angular/fire/database';
import { mergeMap, map, shareReplay, flatMap } from 'rxjs/operators';
import * as moment from 'moment';
import Moment = moment.Moment;
import { Appointment } from './types/appointment.type';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  VIEW_MODE = VIEW_MODE;
  viewMode$ = new BehaviorSubject(VIEW_MODE.MONTH);

  navigation$ = new BehaviorSubject<number>(0);
  searchTerm$ = new BehaviorSubject('');
  filter;
  zoom: number = 14;
  lat: number = 44.445248;
  lng: number = 26.099672;
  styles: any[] = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];
  data: Date = new Date();
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
    .pipe(map((data) => data.map(val=>{
      const data:any=val.payload.val();
      data.$key=val.payload.key;
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


      this.appointments$.subscribe((val) => {

      });
    });


  constructor(
    private db: AngularFireDatabase,
    private http: HttpClientModule
  ) { }

  ngOnInit() {
    this.filteredAppointments$;
    console.log('Calendar');
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {

  }

  private filterByTerm(appointment, term: string): boolean {
    return (
      appointment.description.toLowerCase().indexOf(term.toLowerCase()) > -1
    );
  }

  onSetViewMode(viewMode: string): void {
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

  onRemoveAppointment(id: string): void {
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
