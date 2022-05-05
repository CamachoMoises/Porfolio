import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NouisliderModule } from 'ng2-nouislider';
import { ContactModule } from '../../../shared/components/contact/contact.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ProlixComponent } from './tabs/prolix/prolix.component';
import { BLProjectComponent } from './tabs/B-L-Project/B-L-Project.component';
import { HogwartsComponent } from './tabs/Hogwarts/Hogwarts.component';
import { ProlixBackComponent } from './tabs/prolix-back/prolix-back.component';
import { TechnoIDentiaComponent } from './tabs/TechnoIDentia/TechnoIDentia.component'
import { GalleryViewerComponent } from './GalleryViewer/GalleryViewer.component'
import { InvitracvComponent } from "./tabs/invitracv/invitracv.component";

@NgModule({
  declarations: [
    GalleryComponent,
    ProlixComponent,
    BLProjectComponent,
    HogwartsComponent,
    ProlixBackComponent,
    TechnoIDentiaComponent,
    InvitracvComponent,
    GalleryViewerComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    TranslateModule,
    JwBootstrapSwitchNg2Module,
    NouisliderModule,
    ContactModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatListModule,
    NgbModule,
    MatTabsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY_HERE'
    })
  ]
})
export class GalleryModule { }
