import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationCarPage } from './creation-car.page';

const routes: Routes = [
  {
    path: '',
    component: CreationCarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationCarPageRoutingModule {}
