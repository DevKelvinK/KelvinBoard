import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { KpiCardComponent } from "./components/kpi-card/kpi-card.component";
import { PeriodFilterComponent } from './components/period-filter/period-filter.component';
import { OrderTableComponent } from './components/order-table/order-table.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    KpiCardComponent,
    PeriodFilterComponent,
    OrderTableComponent
],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
