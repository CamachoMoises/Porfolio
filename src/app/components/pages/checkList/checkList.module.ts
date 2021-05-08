import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckListComponent } from './checkList.component';
import { CheckListRoutingModule } from "./checkList-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TaskComponent } from './task/task.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';



@NgModule({
  imports: [
    CommonModule,
    CheckListRoutingModule,
    NgbModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
  ],
  declarations: [CheckListComponent,TaskComponent, TaskDialogComponent]
})
export class CheckListModule { }
