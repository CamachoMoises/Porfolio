import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'app/shared/services/loacalStorage.service';


@Component({
  selector: 'app-favorite',
  template: `
  <section class="character__list" >
    <app-character-card *ngFor="let character of characterFav$|async" [character]="character"></app-character-card>
  </section>
  `,
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent  {

  characterFav$=this.localStoServ.charactersFav$ ;
  constructor(
    private localStoServ: LocalStorageService
  ) { }

}
