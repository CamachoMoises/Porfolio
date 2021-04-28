import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { DataService } from 'app/shared/services/data.service';

@Component({
  selector: 'app-character-list',
  template: `
  <section class="character__list"
  infiniteScroll
  (scrolled)="onScrollDown()"
  >
    <app-character-card *ngFor="let character of character$|async" [character]="character"></app-character-card>
    <button class="button" *ngIf="showButton" (click)="onscrollTop()" type="button">⬆️</button>
  </section>
  `,
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent {

  showButton;
  character$ = this.dataScv.character$;
  private scrollHeight=500;
  private pageNum=1;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private dataScv: DataService,
  ) { }

  @HostListener('window:scroll') onWindowScroll(): void {
    const yOfset = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOfset || scrollTop) > this.scrollHeight;
  }
  onscrollTop(): void {
    this.document.documentElement.scrollTop=0;
  }
  onScrollDown(): void{
    this.pageNum++;
    this.dataScv.getCharactersByPage(this.pageNum);
  }
 
}
