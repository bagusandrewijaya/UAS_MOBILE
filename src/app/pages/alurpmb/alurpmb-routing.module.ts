import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlurpmbPage } from './alurpmb.page';

const routes: Routes = [
  {
    path: '',
    component: AlurpmbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlurpmbPageRoutingModule {}
