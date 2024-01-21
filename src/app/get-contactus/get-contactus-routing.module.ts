import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetContactusPage } from './get-contactus.page';

const routes: Routes = [
  {
    path: '',
    component: GetContactusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetContactusPageRoutingModule {}
