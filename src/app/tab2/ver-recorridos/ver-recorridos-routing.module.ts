import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerRecorridosPage } from './ver-recorridos.page';

const routes: Routes = [
  {
    path: '',
    component: VerRecorridosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerRecorridosPageRoutingModule {}
