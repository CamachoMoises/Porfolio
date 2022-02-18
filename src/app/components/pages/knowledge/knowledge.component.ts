import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import * as Rellax from 'rellax';


@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {
  step = 0;
  data : Date = new Date();
  focus;
  focus1;
  
  constructor( private translate:TranslateService ) {
    const lang=localStorage.getItem('lang');
    this.translate.setDefaultLang(lang);
   }

  ngOnInit(): void {
    var rellaxHeader = new Rellax('.rellax-header');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

  setStep(index: number) {
    this.step = index;
  }
  
  nextStep() {
    this.step++;
  }
  
  prevStep() {
    this.step--;
  }
}
