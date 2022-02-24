import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {
  step = 0;
  data: Date = new Date();
  focus;
  focus1;
  showButton;
  private scrollHeight = 500;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private translate: TranslateService) {
    const lang = localStorage.getItem('lang');
    this.translate.setDefaultLang(lang);
  }

  @HostListener('window:scroll') onWindowScroll(): void {
    const yOffset = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffset || scrollTop) > this.scrollHeight;
  }

  ngOnInit(): void {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  onscrollTop(): void {
    this.document.documentElement.scrollTop = 0;
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
