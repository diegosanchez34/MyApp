import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterpolacionPage } from './interpolacion.page';

const routes: Routes = [
  {
    path: '',
    component: InterpolacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterpolacionPageRoutingModule {}
