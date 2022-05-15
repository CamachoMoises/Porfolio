import { Component } from '@angular/core';
import {NodeJsSheetOverviewComponent} from './node-js-sheet-overview/node-js-sheet-overview.component'
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-back-k',
  templateUrl: './back-k.component.html',
  styleUrls: ['./back-k.component.css']
})
export class BackKComponent {
  NPMPackages:string[]= [
  "bcryptjs",
  "body-parser",
  "cloudinary",
  "cookie-parser",
  "cors",
  "dotenv",
  "ejs",
  "express",
  "express-jwt",
  "express-session",
  "file-extension",
  "jsonwebtoken",
  "morgan",
  "multer",
  "mysql2",
  "nodemon",
  "passport",
  "passport-local",
  "rxjs"
];
  constructor(
    private _bottomSheet: MatBottomSheet
  ) { }

  moreNode(event: Event): void {
    event.stopPropagation();
    console.log('More node');
    this._bottomSheet.open(NodeJsSheetOverviewComponent)
  }
}
