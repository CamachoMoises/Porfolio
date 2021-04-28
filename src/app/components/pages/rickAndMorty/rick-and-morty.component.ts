import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { LocalStorageService } from 'app/shared/services/loacalStorage.service';
import { DataService } from 'app/shared/services/data.service';




@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrls: ['./rick-and-morty.component.scss']
})
export class RickAndMortyComponent implements OnInit {
  character$ = this.dataScv.character$;
  charcater;
  characterFav$=this.localStoServ.charactersFav$ ;
  fav:number
  constructor(
    private localStoServ: LocalStorageService,
    private dataScv: DataService,
  ) { }
  
  ngOnInit():void{
    var rellaxHeader = new Rellax('.rellax-header');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    this.characterFav$.subscribe( val=>{
      this.fav=val.length;
    })
    this.character$.subscribe( val=>{
      this.charcater=val
      console.log('Character', val);
    })
  }

}
