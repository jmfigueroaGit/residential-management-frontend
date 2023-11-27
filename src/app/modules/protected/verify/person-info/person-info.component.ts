import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResidentData } from 'src/app/core/models/resident.model';
import { ResidentService } from 'src/app/core/services/resident.service';

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
  residentData!: ResidentData;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private residentService: ResidentService
  ) {}

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

    this.residentData = this.residentService.getDefaultResidentData();

    // personalInfo
    this.residentData.name.first = personalInfo.firstName;
    this.residentData.name.middle = personalInfo.middleName;
    this.residentData.name.last = personalInfo.lastName;
    this.residentData.name.extension = personalInfo.extension;
    this.residentData.sex = personalInfo.sex;
    this.residentData.birthday = personalInfo.birthday;
    this.residentData.civilStatus = personalInfo.civilStatus;
    this.residentData.nationality = personalInfo.nationality;
    // contactInfo
    this.residentData.contactNumber = contactInfo.mobileNumber;
    this.residentData.email = contactInfo.email;
    this.residentData.contactPerson.name = contactInfo.econtactName;
    this.residentData.contactPerson.contactNumber = contactInfo.econtactNumber;
    this.residentData.contactPerson.relationship =
      contactInfo.econtactRelationship;
    this.residentData.contactPerson.address = contactInfo.econtactAddress;
    // addressInfo
    this.residentData.address.houseNumber = addressInfo.houseNo;
    this.residentData.address.street = addressInfo.street;
    this.residentData.address.barangay = addressInfo.barangay;
    this.residentData.address.region = addressInfo.region;
    this.residentData.address.city = addressInfo.city;
    this.residentData.address.zipcode = addressInfo.zipcode;
    // backgroundInfo
    this.residentData.background.employment = backgroundInfo.employment;
    this.residentData.background.highEduAttainment =
      backgroundInfo.highEduAttainment;
    this.residentData.background.isSeniorCitizen =
      backgroundInfo.isSeniorCitizen;
    this.residentData.background.isPWD = backgroundInfo.isPWD;
    this.residentData.background.isSingleParent = backgroundInfo.isSingleParent;
    this.residentData.background.isStudent = backgroundInfo.isStudent;

    this.createResident(this.residentData);

    // );
  }

  createResident(resident: object): void {
    this.residentService.createResident(resident).subscribe({
      next: ({ data, loading }) => {
        if (loading) {
          console.log('Loading');
        } else {
          this.navigateTo('verify-id');
        }
      },
      error: (error) => {
        console.error(error.message);
      },
    });
  }
}
