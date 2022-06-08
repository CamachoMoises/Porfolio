import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from "firebase/app";
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { SpinnerService } from './spinner.services';
import { userGoogle } from "../interfaces/userGoogle";

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private spinnerService: SpinnerService,
    private auth: AngularFireAuth,
  ) {

  }

  private ActiveRoute = new BehaviorSubject<String>('/home')
  ActiveRoute$ = this.ActiveRoute.asObservable();
  private ActiveUser = new BehaviorSubject<userGoogle>(null)
  ActiveUser$ = this.ActiveUser.asObservable();

  getRoute(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // console.log('Change in route detected');
        this.spinnerService.show();
      } else if (event instanceof NavigationEnd) {
        this.ActiveRoute.next(event.url);
        this.spinnerService.hide();
      } if (event instanceof NavigationError) {
        console.error('error en las rutas', event.error);
        this.spinnerService.hide();
      }
    });

  }


  loginUser(): void {
    this.spinnerService.show();
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((resp) => {
        this.spinnerService.hide();
        // console.log('sign In', resp);
        const {user}=resp
        this.ActiveUser.next(user)
        
      })
  }

  logoutUser(): void {
    this.spinnerService.show();
    this.auth.signOut().then((resp) => {
      this.spinnerService.hide();
      // console.log('sign Out', resp);
      this.ActiveUser.next(null);

    });
  }

  authStatus(): void {
  this.auth.onAuthStateChanged((user) => {
    this.ActiveUser.next(user)
  })
  }


}
