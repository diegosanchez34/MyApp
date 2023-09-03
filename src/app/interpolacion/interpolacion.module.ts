import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterpolacionPageRoutingModule } from './interpolacion-routing.module';

import { InterpolacionPage } from './interpolacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterpolacionPageRoutingModule
  ],
  declarations: [InterpolacionPage]
})
export class InterpolacionPageModule {}
