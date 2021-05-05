import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RickAndMortyComponent } from './rick-and-morty.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CharacterListComponent } from './character-list/character-list.component';

const routes: Routes = [
  { path: '', component: RickAndMortyComponent ,children:[
    {path:'', component:CharacterListComponent},
    {path:'favorite', component:FavoriteComponent},
    {path:'episodes', component:EpisodesComponent},
  ]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RickAndMortyRoutingModule { }
