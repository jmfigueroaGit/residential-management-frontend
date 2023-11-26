import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-id',
  templateUrl: './verify-id.component.html',
  styleUrls: ['./verify-id.component.scss'],
})
export class VerifyIdComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
