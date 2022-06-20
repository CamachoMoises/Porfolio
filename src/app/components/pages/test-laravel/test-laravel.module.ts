import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestLaravelRoutingModule } from './test-laravel-routing.module';
import { TestLaravelComponent } from './test-laravel.component';


@NgModule({
  declarations: [
    TestLaravelComponent
  ],
  imports: [
    CommonModule,
    TestLaravelRoutingModule
  ]
})
export class TestLaravelModule { }
