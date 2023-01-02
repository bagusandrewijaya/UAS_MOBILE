import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeePage } from './fee.page';

const routes: Routes = [
  {
    path: '',
    component: FeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeePageRoutingModule {}
