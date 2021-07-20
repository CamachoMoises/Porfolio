import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { NouisliderModule } from 'ng2-nouislider';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DayViewComponent } from './components/day-view/day-view.component';
import { WeekViewComponent } from './components/week-view/week-view.component';
import { MonthViewComponent } from './components/month-view/month-view.component';
import { DayDetailComponent } from './components/day-detail/day-detail.component';
import { DayResumeComponent } from "./components/day-resume/day-resume.component";
import { TopbarComponent } from './components/topbar/topbar.component';


import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatListModule} from '@angular/material/list'; 
import { TranslateModule } from '@ngx-translate/core';






@NgModule({
  declarations: [
    CalendarComponent, 
    DayViewComponent,
    WeekViewComponent, 
    MonthViewComponent,
    DayDetailComponent, 
    DayResumeComponent, 
    TopbarComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    NgbModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY_HERE'
    }),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    TranslateModule
  ]
})
export class CalendarModule { }
