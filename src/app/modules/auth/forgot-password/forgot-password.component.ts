import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/shared/pipes/authenticate.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(private router: Router, private auth: AuthenticateService) {}

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  ngOnInit(): void {
    this.auth.isAutheticated().subscribe((loggedIn) => {
      if (loggedIn) {
        this.navigateTo('/home');
      }
    });
  }
}
