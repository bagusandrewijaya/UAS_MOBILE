import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'alurpmb',
    loadChildren: () => import('./pages/alurpmb/alurpmb.module').then( m => m.AlurpmbPageModule)
  },
  
  {
    path: 'fee',
    loadChildren: () => import('./pages/fee/fee.module').then( m => m.FeePageModule)
  },
  {
    path: 'pendaftaran',
    loadChildren: () => import('./pages/pendaftaran/pendaftaran.module').then( m => m.PendaftaranPageModule)
  },
  {
    path: 'daftar',
    loadChildren: () => import('./pages/daftar/daftar.module').then( m => m.DaftarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
