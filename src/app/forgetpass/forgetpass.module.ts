import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgetpassPageRoutingModule } from './forgetpass-routing.module';

import { ForgetpassPage } from './forgetpass.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ForgetpassPageRoutingModule
  ],
  declarations: [ForgetpassPage]
})
export class ForgetpassPageModule {}
