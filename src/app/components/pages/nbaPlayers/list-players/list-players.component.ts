import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NbaDataService } from 'app/shared/services/nba-data.service';
import { DataTeam } from 'app/shared/interfaces/data-team';

import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter,
  startWith,
  switchMap,
  catchError,
} from 'rxjs/operators';
import { fromEvent, merge, of as observableOf } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.scss']
})
export class ListPlayersComponent implements OnInit {
  // MatPaginator Inputs
  length: number = 10;
  pageSizeOptions: number[] = [10, 25, 100];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('searchInput', { static: true }) searchInput: ElementRef = null;
  //@ViewChild('searchTeanInput', { static: true })
  searchTeanInput: ElementRef = null;

  displayedColumns = [
    'id',
    'first_name',
    'last_name',
    'height_inches',
    'height_feet',
    'weight_pounds',
    'position',
  ];
  isSearching: boolean = true;
  changepage: boolean;

  public dataD: MatTableDataSource<DataTeam> = null;
  public metaD: {
    current_page: string;
    next_page: string;
    total_count: string;
    total_pages: string;
  };

  constructor(private Nbaservice: NbaDataService) { }

  ngOnInit() {
    console.log('init');

    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        // get value
        map((event: any) => {
          return event.target.value;
        }),
        // if character length greater then 2
        filter((res) => res.length > 2),
        // Time in milliseconds between key events
        debounceTime(2000),
        // If previous query is diffent from current
        distinctUntilChanged()
      ) // subscription for response
      .subscribe((text: string) => {
        this.isSearching = true;

        this.Nbaservice.searchGetCall(text).subscribe(
          (res) => {
            console.log('Busqueda', res.data);
            this.paginator.pageIndex = 0;
            this.isSearching = false;
            this.dataD = res.data;
            this.length = res.meta.total_count;
          },
          (err) => {
            this.isSearching = false;
            console.log('error', err);
          }
        );
      });
  }
  ngAfterViewInit() {
    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isSearching = true;
          console.log(
            'Index',
            this.paginator.pageIndex,
            'Length',
            this.paginator.pageSize
          );
          return this.Nbaservice.getAllPlayes(
            this.paginator.pageIndex.toString(),
            this.paginator.pageSize.toString()
          );
        }),
        map((data) => {
          // Flip flag to show that loading has finished.
          this.length = data.meta.total_count;
          return data.data;
        }),
        catchError(() => {
          // Catch if the GitHub API has reached its rate limit. Return empty data.

          return observableOf([]);
        })
      )
      .subscribe((data) => {
        console.log(data);
        this.dataD = data;
        this.isSearching = false;
      });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
  }

}
