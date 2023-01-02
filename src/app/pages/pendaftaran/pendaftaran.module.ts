import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendaftaranPageRoutingModule } from './pendaftaran-routing.module';

import { PendaftaranPage } from './pendaftaran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendaftaranPageRoutingModule
  ],
  declarations: [PendaftaranPage]
})
export class PendaftaranPageModule {}
