import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable(
  {providedIn:'root'}
)
export class SpinnerService{
  isLoading$= new Subject<boolean>();
  show(): void{
    this.isLoading$.next(true);
    // console.log('spinner serv ON');
    
  }
  hide(): void{
    this.isLoading$.next(false);
    // console.log('spinner serv OFF');
  }

}
