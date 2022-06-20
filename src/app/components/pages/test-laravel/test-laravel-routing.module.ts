import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestLaravelComponent } from './test-laravel.component';

const routes: Routes = [{ path: '', component: TestLaravelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestLaravelRoutingModule { }
