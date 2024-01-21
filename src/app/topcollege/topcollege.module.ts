import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopcollegePageRoutingModule } from './topcollege-routing.module';

import { TopcollegePage } from './topcollege.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopcollegePageRoutingModule
  ],
  declarations: [TopcollegePage]
})
export class TopcollegePageModule {}
