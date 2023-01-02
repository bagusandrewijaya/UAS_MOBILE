import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlurpmbPageRoutingModule } from './alurpmb-routing.module';

import { AlurpmbPage } from './alurpmb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlurpmbPageRoutingModule
  ],
  declarations: [AlurpmbPage]
})
export class AlurpmbPageModule {}
