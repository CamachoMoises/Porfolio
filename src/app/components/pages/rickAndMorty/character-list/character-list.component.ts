import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { DataService } from 'app/shared/services/data.service';

@Component({
  selector: 'app-character-list',
  template: `
  <app-search></app-search>
  <section class="character__list"
  infiniteScroll
  (scrolled)="onScrollDown()"
  >
  <ng-container *ngIf="character$ |async as characters; else showEmpty">

    <app-character-card
    *ngFor="let character of characters, let i=index"
    [character]="character"></app-character-card>
  </ng-container>
  <ng-template #showEmpty>
    <div class="no__results">
      <h1 class="tittle" >Sin resultados</h1>
      <img src="assets/img/404.jpeg" alt="404">
    </div>
  </ng-template>
    <button class="button" *ngIf="showButton" (click)="onscrollTop()" type="button">⬆️</button>
  </section>
  `,
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent {

  showButton;
  character$ = this.dataScv.character$;
  private scrollHeight = 500;
  private pageNum = 1;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private dataScv: DataService,
  ) { }

  @HostListener('window:scroll') onWindowScroll(): void {
    const yOffset = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffset || scrollTop) > this.scrollHeight;
  }
  onscrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }
  onScrollDown(): void {
    this.pageNum++;
    this.dataScv.getCharactersByPage(this.pageNum);
  }

}
