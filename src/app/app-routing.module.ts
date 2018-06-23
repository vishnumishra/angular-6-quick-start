import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisDashboardModule } from './vis-dashboard/vis-dashboard.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), VisDashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
