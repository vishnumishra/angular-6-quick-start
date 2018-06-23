import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisProfileRoutingModule } from './vis-profile-routing.module';
import { VisProfileComponent } from './vis-profile.component';

@NgModule({
  imports: [
    CommonModule,
    VisProfileRoutingModule
  ],
  declarations: [VisProfileComponent]
})
export class VisProfileModule { }
