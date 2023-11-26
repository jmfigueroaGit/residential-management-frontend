import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { DefaultHomeComponent } from './protected/default-home/default-home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IdentificationComponent } from './protected/verify/identification/identification.component';
import { VerifyIdComponent } from './protected/verify/verify-id/verify-id.component';
import { PersonInfoComponent } from './protected/verify/person-info/person-info.component';
import { MaterialModule } from '../core/utils/material/material.module';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { WelcomeComponent } from './protected/welcome/welcome.component';

@NgModule({
  declarations: [
    DefaultHomeComponent,
    NotFoundComponent,
    PersonInfoComponent,
    VerifyIdComponent,
    IdentificationComponent,
    WelcomeComponent,
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
