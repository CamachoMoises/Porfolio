import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckListComponent } from "./checkList.component";
const routes: Routes = [{ path: '', component: CheckListComponent }];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CheckListRoutingModule{}