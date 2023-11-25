import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { DefaultHomeComponent } from './default-home/default-home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from '../core/utils/material/material.module';

@NgModule({
  declarations: [DefaultHomeComponent, NotFoundComponent],
  imports: [CommonModule, ModulesRoutingModule, MaterialModule],
})
export class ModulesModule {}
