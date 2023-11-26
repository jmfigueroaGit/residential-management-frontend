import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { DefaultHomeComponent } from './default-home/default-home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MaterialModule } from '../core/utils/material/material.module';
import { PersonInfoComponent } from './verify/person-info/person-info.component';
import { VerifyIdComponent } from './verify/verify-id/verify-id.component';
import { IdentificationComponent } from './verify/identification/identification.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@NgModule({
  declarations: [
    DefaultHomeComponent,
    NotFoundComponent,
    PersonInfoComponent,
    VerifyIdComponent,
    IdentificationComponent,
  ],
  imports: [CommonModule, ModulesRoutingModule, MaterialModule],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class ModulesModule {}
