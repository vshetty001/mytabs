import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTabPage } from './create-tab.page';

const routes: Routes = [
  {
    path: '',
    component: CreateTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateTabPageRoutingModule {}
