import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss'],
})
export class PersonInfoComponent implements OnInit {
  personalInfoForm!: FormGroup;
  contactInfoForm!: FormGroup;
  addressInfoForm!: FormGroup;
  backgroundInfoForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initForms();
  }

  initForms(): void {
    this.personalInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      extension: [''],
      sex: ['', Validators.required],
      birthday: ['', Validators.required],
      civilStatus: ['', Validators.required],
      nationality: ['', Validators.required],
    });

    this.contactInfoForm = this.formBuilder.group({
      mobileNumber: ['', Validators.required],
      email: ['', Validators.required],
      econtactName: ['', Validators.required],
      econtactNumber: ['', Validators.required],
      econtactRelationship: ['', Validators.required],
      econtactAddress: ['', Validators.required],
    });

    this.addressInfoForm = this.formBuilder.group({
      houseNo: ['', Validators.required],
      street: ['', Validators.required],
      barangay: ['', Validators.required],
      region: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', Validators.required],
    });

    this.backgroundInfoForm = this.formBuilder.group({
      employment: [''],
      highEduAttainment: [''],
      isSeniorCitizen: [false, Validators.required],
      isPWD: [false, Validators.required],
      isSingleParent: [false, Validators.required],
      isStudent: [false, Validators.required],
    });
  }

  isPersonalInfoFormValid() {
    return this.personalInfoForm.valid;
  }

  isContactInfoFormValid() {
    return this.contactInfoForm.valid;
  }

  isAddressInfoFormValid() {
    return this.addressInfoForm.valid;
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  submit() {
    const personalInfo = this.personalInfoForm.value;
    const contactInfo = this.contactInfoForm.value;
    const addressInfo = this.addressInfoForm.value;
    const backgroundInfo = this.backgroundInfoForm.value;

    this.navigateTo('verify-id');
  }
}

/*
[disabled]="
!isPersonalInfoFormValid() ||
!isContactInfoFormValid() ||
!isAddressInfoFormValid()
"
*/
