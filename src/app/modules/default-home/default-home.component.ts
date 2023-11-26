import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.scss'],
})
export class DefaultHomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  proceed(): void {
    this.navigateTo('verify-info');
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
