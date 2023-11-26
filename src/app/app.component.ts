import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from './shared/pipes/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private auth: AuthenticateService) {}

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  ngOnInit(): void {
    this.auth.isAutheticated().subscribe((loggedIn) => {
      if (!loggedIn) {
        this.navigateTo('/');
      }
    });
  }
}
