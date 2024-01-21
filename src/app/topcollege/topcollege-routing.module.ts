import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopcollegePage } from './topcollege.page';

const routes: Routes = [
  {
    path: '',
    component: TopcollegePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopcollegePageRoutingModule {}
