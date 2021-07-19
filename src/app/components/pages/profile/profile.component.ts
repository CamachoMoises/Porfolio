import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { TranslateService } from '@ngx-translate/core'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  data : Date = new Date();
  focus;
  focus1;

  constructor( private translate:TranslateService ) {
    const lang=localStorage.getItem('lang')
    console.log(lang);
    this.translate.setDefaultLang(lang);
   }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

}
