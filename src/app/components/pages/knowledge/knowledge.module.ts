import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnowledgeRoutingModule } from './knowledge-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NouisliderModule } from 'ng2-nouislider';
import { ContactModule } from '../../../shared/components/contact/contact.module';

import {MatExpansionModule} from '@angular/material/expansion';


import { KnowledgeComponent } from './knowledge.component';
import { FrontKComponent, AngularSheetOverviewSheet } from './front-k/front-k.component';
import { GitKComponent } from './git-k/git-k.component';
import { BackKComponent } from './back-k/back-k.component';
import { DataKComponent } from './data-k/data-k.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';  
import {MatButtonModule} from '@angular/material/button';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet'; 
import {MatListModule} from '@angular/material/list'; 



@NgModule({
  declarations: [
    KnowledgeComponent,
    FrontKComponent,
    GitKComponent,
    BackKComponent,
    DataKComponent,
    AngularSheetOverviewSheet
  ],
  imports: [
    CommonModule,
    KnowledgeRoutingModule,
    TranslateModule,
    JwBootstrapSwitchNg2Module,
    JwBootstrapSwitchNg2Module,
    NouisliderModule,
    ContactModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatListModule
  ]
})
export class KnowledgeModule { }
