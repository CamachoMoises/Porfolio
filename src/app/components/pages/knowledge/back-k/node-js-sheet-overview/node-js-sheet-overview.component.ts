import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

export interface Section {
  name: string;

}

@Component({
  selector: 'app-node-js-sheet-overview',
  templateUrl: './node-js-sheet-overview.component.html',
  styleUrls: ['./node-js-sheet-overview.component.css']
})
export class NodeJsSheetOverviewComponent {
  nodeMethods: Array<string> = [
    'app.get()',
    'app.post()',
    'app.put()',
    'app.delete()',
  ];

  folders: Section[] = [
    {
      name: 'Express session',
    },
    {
      name: 'Express JSON Web Token Middleware',
    },
    {
      name: 'Passport',
    },
    {
      name: 'bcrypt'
    }
  ];
  notes: Section[] = [
    {
      name: 'Multer',
    },
    {
      name: 'Body Parser',
    },
  ];
  queries: Array<string> = [
    'CREATE TABLE',
    'DELETE TABLE',
    'INSERT INTO',
    'SELECT * FROM',
    'DELETE FROM',
    'UPDATE'
  ]
  filtersSQL: Array<string>=[
    'WHERE',
    'ORDER BY',
    'LIMIT '
  ]


  constructor(private _bottomSheetRef: MatBottomSheetRef<NodeJsSheetOverviewComponent>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }


}
