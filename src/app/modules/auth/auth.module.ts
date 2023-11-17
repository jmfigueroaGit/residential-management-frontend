import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { MaterialModule } from 'src/app/core/utils/material/material.module';
import { LoginComponent } from './login/login.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { CheckMailComponent } from './check-mail/check-mail.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    CheckMailComponent,
    CreatePasswordComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, MaterialModule],
})
export class AuthModule {}
