import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisDashboardRoutingModule } from './vis-dashboard-routing.module';
import { VisDashboardComponent } from './vis-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    VisDashboardRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [VisDashboardComponent]
})
export class VisDashboardModule { }
