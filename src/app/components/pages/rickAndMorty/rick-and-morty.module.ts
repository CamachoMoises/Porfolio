import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickAndMortyRoutingModule } from './rick-and-morty-routing.module';
import { RickAndMortyComponent } from './rick-and-morty.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterCardComponent } from './character-list/character-card/character-card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';




@NgModule({
  declarations: [
    RickAndMortyComponent,
    EpisodesComponent,
    FavoriteComponent,
    CharacterListComponent,
    CharacterCardComponent,
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    RickAndMortyRoutingModule,
    NgbModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY_HERE'
    }),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,

  ]
})
export class RickAndMortyModule { }
