import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgChartRoutingModule } from './org-chart-routing.module';
import { OrgChartComponent } from './org-chart.component';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    OrgChartComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    OrgChartRoutingModule
  ]
})
export class OrgChartModule { }
