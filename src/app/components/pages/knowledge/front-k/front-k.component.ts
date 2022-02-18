import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-front-k',
  templateUrl: './front-k.component.html',
  styleUrls: ['./front-k.component.css']
})
export class FrontKComponent implements OnInit {
  
  panelOpenState = false;
  constructor(
    private _bottomSheet: MatBottomSheet
  ) { }

  ngOnInit(): void {
  }
  moreJavaScript( event: Event):void{
    event.stopPropagation();
    console.log('More JavaScript');
    
  }

  moreAngular( event: Event): void{
    event.stopPropagation();
    console.log('More Angular');
    this._bottomSheet.open(AngularSheetOverviewSheet)
  }
}




@Component({
  selector: 'angular-sheet-overview-sheet',
  templateUrl: 'angular-sheet-overview-sheet.html',
})
export class AngularSheetOverviewSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<AngularSheetOverviewSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}