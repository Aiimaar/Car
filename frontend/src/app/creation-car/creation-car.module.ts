import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationCarPageRoutingModule } from './creation-car-routing.module';

import { CreationCarPage } from './creation-car.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreationCarPageRoutingModule
  ],
  declarations: [CreationCarPage]
})
export class CreationCarPageModule {}
