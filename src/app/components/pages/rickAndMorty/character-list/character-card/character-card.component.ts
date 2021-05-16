import { Component, OnInit, Input } from '@angular/core';
import { Character } from "app/shared/interfaces/data.interface";
import { LocalStorageService } from "app/shared/services/loacalStorage.service";
@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {
  @Input() character: Character ;
  constructor(
    private localStoServ: LocalStorageService
    ) {}
  getIcon(): string {

    return this.character.isFavorite ? 'heart-solid.svg' : 'heart.svg';
  }
  toggleFavorite(): void{
   const isFavorite = this.character.isFavorite;
   this.getIcon();
    this.character.isFavorite=!isFavorite;
    this.localStoServ.addoOrRemoveFavorite(this.character);
  }
}
