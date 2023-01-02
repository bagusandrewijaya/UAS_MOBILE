import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[

          {
            path:'fee',
            loadChildren:() => import('../fee/fee.module').then(m => m.FeePageModule)
        },

      {
        path:'alurpmb',
        loadChildren:() => import('../alurpmb/alurpmb.module').then(m => m.AlurpmbPageModule)
    },
    {
      path:'pendaftaran',
      loadChildren:() => import('../pendaftaran/pendaftaran.module').then(m => m.PendaftaranPageModule)
  },
  {
    path:'daftar',
    loadChildren:() => import('../daftar/daftar.module').then(m => m.DaftarPageModule)
},

    
        ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
