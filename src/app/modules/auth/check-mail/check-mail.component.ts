import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/shared/pipes/authenticate.service';

@Component({
  selector: 'app-check-mail',
  templateUrl: './check-mail.component.html',
  styleUrls: ['./check-mail.component.scss'],
})
export class CheckMailComponent implements OnInit {
  constructor(private router: Router, private auth: AuthenticateService) {}

  ngOnInit(): void {
    this.auth.isAutheticated().subscribe((loggedIn) => {
      if (loggedIn) {
        this.navigateTo('/home');
      }
    });
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
