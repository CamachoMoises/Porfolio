import { Component } from '@angular/core';

@Component({
  selector: 'app-data-k',
  templateUrl: './data-k.component.html',
  styleUrls: ['./data-k.component.css']
})
export class DataKComponent {
  queries: Array<string> = [
    'CREATE DATABASE',
    'DROP TABLE',
    'CREATE TABLE',
    'DELETE TABLE',
    'INSERT INTO',
    'SELECT',
    'DELETE',
    'UPDATE',
    'PROCEDURE',
    'CURSOR',
    'HANDLER',
    'IF ... THEN',
    'FETCH',
  ]
  filtersSQL: Array<string>=[
    'FROM',
    'WHERE',
    'ORDER BY',
    'LIMIT ',
    'INNER JOIN ... ON',
    'LIKE ... OR  LIKE...'
  ]
  constructor() { }


}
