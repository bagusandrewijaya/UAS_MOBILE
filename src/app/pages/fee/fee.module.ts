import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeePageRoutingModule } from './fee-routing.module';

import { FeePage } from './fee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeePageRoutingModule
  ],
  declarations: [FeePage]
})
export class FeePageModule {}
