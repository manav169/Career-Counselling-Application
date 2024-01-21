import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetContactusPageRoutingModule } from './get-contactus-routing.module';

import { GetContactusPage } from './get-contactus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetContactusPageRoutingModule
  ],
  declarations: [GetContactusPage]
})
export class GetContactusPageModule {}
