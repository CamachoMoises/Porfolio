import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prolix',
  templateUrl: './prolix.component.html',
  styleUrls: ['./prolix.component.scss']
})
export class ProlixComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  SeeImage(route:string){
    console.log(route);
    
  }

}
