import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PeriodFilterComponent } from './components/period-filter/period-filter.component';
import { KpiCardComponent } from "./components/kpi-card/kpi-card.component";
import { ChartComponent } from './components/chart/chart.component';
import { OrdersTableComponent } from './components/orders-table/orders-table.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PeriodFilterComponent,
    KpiCardComponent,
    ChartComponent,
    OrdersTableComponent
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
