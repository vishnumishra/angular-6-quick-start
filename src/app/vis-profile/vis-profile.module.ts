import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisProfileRoutingModule } from './vis-profile-routing.module';
import { VisProfileComponent } from './vis-profile.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    VisProfileRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [VisProfileComponent]
})
export class VisProfileModule { }
