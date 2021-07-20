import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgbdModalBasic } from '../../modal/modal.component';


import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactModule } from 'app/shared/components/contact/contact.module'
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NouisliderModule,
    NgbModule,
    JwBootstrapSwitchNg2Module,
    FormsModule,
    ReactiveFormsModule,
    ContactModule,
    TranslateModule
  ],
  declarations: [
    HomeComponent,
    NgbdModalBasic
  ],
})
export class HomeModule { }
