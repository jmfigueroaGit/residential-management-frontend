import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { DefaultHomeComponent } from './default-home/default-home.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    DefaultHomeComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
