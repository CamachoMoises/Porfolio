import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { SpinnerService } from './spinner.services';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private spinnerService:SpinnerService
    ) { 
      
  }

  private ActiveRoute = new BehaviorSubject<String>('/home')
  ActiveRoute$ = this.ActiveRoute.asObservable();


   getRoute(): void {
    this.router.events.subscribe((event:Event)=>{
      if (event instanceof NavigationStart) { 
        console.log('Change in route detected');
        this.spinnerService.show();
      }else if (event instanceof NavigationEnd) {
        this.ActiveRoute.next(event.url);
        this.spinnerService.hide();
      }if (event instanceof NavigationError) {
        console.error('error en las rutas',event.error);
        this.spinnerService.hide();
      }
    });
    
  }

}
