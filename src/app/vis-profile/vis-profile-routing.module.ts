import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisProfileComponent } from './vis-profile.component';

const routes: Routes = [
  { path: 'profile', component: VisProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisProfileRoutingModule { }
