import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactRoutingModule } from './react-routing.module';
import { ReactComponent } from './react.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactNoteComponent } from './react-note/react-note.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ReactComponent,
    ReactNoteComponent
  ],
  imports: [
    CommonModule,
    ReactRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    TranslateModule,
    NgbModule
  ]
})
export class ReactModule { }
