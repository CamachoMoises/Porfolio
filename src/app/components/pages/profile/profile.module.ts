import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';
import { ContactModule } from '../../../shared/components/contact/contact.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NgbModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module,
    ContactModule,
    TranslateModule,
    AgmCoreModule.forRoot({
        apiKey: 'YOUR_KEY_HERE'
    })
  ]
})
export class ProfileModule { }
