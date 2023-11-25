import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticateService } from 'src/app/shared/pipes/authenticate.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
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
