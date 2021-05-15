import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbaPlayersComponent } from './nbaPlayers.component';
import { ListPlayersComponent } from './list-players/list-players.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: NbaPlayersComponent ,children:[
    {path:'', component:ListPlayersComponent},
    {path:'register', component:RegisterComponent},
  ]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class nbaPlayersRoutingModule { }
