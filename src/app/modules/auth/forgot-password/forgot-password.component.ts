import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  constructor(private router: Router) {}

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
