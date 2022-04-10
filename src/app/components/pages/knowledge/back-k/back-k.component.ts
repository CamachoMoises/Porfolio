import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-k',
  templateUrl: './back-k.component.html',
  styleUrls: ['./back-k.component.css']
})
export class BackKComponent implements OnInit {
  NPMPackages= [
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
  constructor() { }

  ngOnInit(): void {
  }

}
