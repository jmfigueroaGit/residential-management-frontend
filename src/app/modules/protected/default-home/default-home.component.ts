import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.scss'],
})
export class DefaultHomeComponent implements OnInit {
  isCompletedInfo: boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  proceed(goto: string): void {
    this.navigateTo(goto);
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
