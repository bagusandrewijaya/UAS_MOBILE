import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendaftaranPage } from './pendaftaran.page';

const routes: Routes = [
  {
    path: '',
    component: PendaftaranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendaftaranPageRoutingModule {}
