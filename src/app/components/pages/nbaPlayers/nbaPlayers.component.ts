import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nbaPlayers',
  templateUrl: './nbaPlayers.component.html',
  styleUrls: ['./nbaPlayers.component.scss']
})
export class NbaPlayersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('profile-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

}
