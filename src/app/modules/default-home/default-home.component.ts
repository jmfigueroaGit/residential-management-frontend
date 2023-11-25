import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.scss'],
})
export class DefaultHomeComponent implements OnInit {
  ngOnInit(): void {}

  proceed(): void {
    console.log('Clicked!');
  }
}
