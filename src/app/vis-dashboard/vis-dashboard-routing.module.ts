import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisDashboardComponent } from './vis-dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: VisDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisDashboardRoutingModule { }
