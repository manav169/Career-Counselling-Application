import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Form1PageRoutingModule } from './form1-routing.module';

import { Form1Page } from './form1.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Form1PageRoutingModule
  ],
  declarations: [Form1Page]
})
export class Form1PageModule {}
