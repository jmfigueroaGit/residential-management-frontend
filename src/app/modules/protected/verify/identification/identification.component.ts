import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.scss'],
})
export class IdentificationComponent implements OnInit {
  @ViewChild('tabGroup') tabGroup!: MatTabGroup;
  idType: string | null = null;
  uploadedFrontImageUrl: string | ArrayBuffer | null = null;
  uploadedBackImageUrl: string | ArrayBuffer | null = null;
  uploadedDisplayImageUrl: string | ArrayBuffer | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  changeTab(index: number): void {
    this.tabGroup.selectedIndex = index;
  }

  selectedIdType(idType: string): void {
    this.idType = idType;
    this.changeTab(1);
  }

  onFrontSideSelected(event: any): void {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedFrontImageUrl = e.target.result;
      };
      reader.readAsDataURL(selectedFile);

      if (this.uploadedFrontImageUrl || this.uploadedBackImageUrl) {
        this.changeTab(2);
      }
    }
  }

  onBackSideSelected(event: any): void {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedBackImageUrl = e.target.result;
      };
      reader.readAsDataURL(selectedFile);
      if (this.uploadedFrontImageUrl || this.uploadedBackImageUrl) {
        this.changeTab(2);
      }
    }
  }

  onDPSelected(event: any): void {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedDisplayImageUrl = e.target.result;
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  clearImage(): void {
    this.uploadedFrontImageUrl = null;
  }

  submit(): void {
    this.router.navigateByUrl('/welcome');
  }
}
