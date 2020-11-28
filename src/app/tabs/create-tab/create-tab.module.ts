import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTabPageRoutingModule } from './create-tab-routing.module';

import { CreateTabPage } from './create-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTabPageRoutingModule
  ],
  declarations: [CreateTabPage]
})
export class CreateTabPageModule {}
