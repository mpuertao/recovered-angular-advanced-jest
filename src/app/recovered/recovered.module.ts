import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoveredRoutingModule } from './recovered-routing.module';
import { RecoveredDetailComponent } from './components/recovered-detail/recovered-detail.component';
import { ListRecoveredComponent } from './components/list-recovered/list-recovered.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditRecoveredComponent } from './components/edit-recovered/edit-recovered.component';


@NgModule({
  declarations: [RecoveredDetailComponent, ListRecoveredComponent, EditRecoveredComponent],
  imports: [
    CommonModule,
    RecoveredRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class RecoveredModule { }
