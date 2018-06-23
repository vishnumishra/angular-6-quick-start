import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisDashboardModule } from './vis-dashboard/vis-dashboard.module';
import { VisProfileModule } from './vis-profile/vis-profile.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), VisDashboardModule, VisProfileModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
