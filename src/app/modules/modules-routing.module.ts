import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DefaultHomeComponent } from './protected/default-home/default-home.component';
import { AuthenticatedGuard } from '../core/guards/auth.guard';
import { PersonInfoComponent } from './protected/verify/person-info/person-info.component';
import { VerifyIdComponent } from './protected/verify/verify-id/verify-id.component';
import { IdentificationComponent } from './protected/verify/identification/identification.component';
import { WelcomeComponent } from './protected/welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: DefaultHomeComponent,
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'verify-info',
    component: PersonInfoComponent,
    pathMatch: 'full',
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'verify-id',
    component: VerifyIdComponent,
    pathMatch: 'full',
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'select-id',
    component: IdentificationComponent,
    pathMatch: 'full',
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [AuthenticatedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
