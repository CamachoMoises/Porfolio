import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { VIEW_MODE } from '../../types/constants';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(private translate: TranslateService) {
    const lang = localStorage.getItem('lang')
    this.translate.setDefaultLang(lang);
  }

  @Output() previous = new EventEmitter();
  @Output() next = new EventEmitter();
  @Output() setViewMode = new EventEmitter<string>();
  @Output() searchChanged = new EventEmitter<string>();
  value = null;
  VIEW_MODE = VIEW_MODE;
  ngOnInit(): void {
  }

}
