import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-software-facility',
  templateUrl: './software-facility.component.html',
  styleUrls: ['./software-facility.component.css']
})
export class SoftwareFacilityComponent implements OnInit {

  constructor(
    private _bottomSheet: MatBottomSheet
  ) { }

  ngOnInit(): void {
  }

  moreGit(event: Event): void {
    event.stopPropagation();
    console.log('More Git');
    this._bottomSheet.open(GitSheetOverviewSheet)
  }

}

@Component({
  selector: 'git-sheet-overview-sheet',
  templateUrl: 'git-sheet-overview-sheet.html',
  styleUrls: ['git-sheet-overview-sheet.css']
})
export class GitSheetOverviewSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<GitSheetOverviewSheet>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}