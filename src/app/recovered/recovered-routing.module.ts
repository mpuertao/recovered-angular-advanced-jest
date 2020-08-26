import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRecoveredComponent } from './components/list-recovered/list-recovered.component';
import { RecoveredDetailComponent } from './components/recovered-detail/recovered-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ListRecoveredComponent
  },
  {
    path: ':id',
    component: RecoveredDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoveredRoutingModule { }
