import { Injectable } from '@angular/core';
import { ResidentData } from '../models/resident.model';
import { Observable } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { RESIDENT_CREATE } from '../graphql/mutations/resident.mutation';

@Injectable({
  providedIn: 'root',
})
export class ResidentService {
  constructor(private apollo: Apollo) {}

  getDefaultResidentData(): ResidentData {
    return {
      name: {
        first: null,
        middle: null,
        last: null,
        extension: null,
      },
      sex: null,
      birthday: null,
      civilStatus: null,
      nationality: null,
      contactNumber: null,
      email: null,
      contactPerson: {
        name: null,
        contactNumber: null,
        relationship: null,
        address: null,
      },
      address: {
        houseNumber: null,
        street: null,
        barangay: null,
        city: null,
        region: null,
        zipcode: null,
      },
      background: {
        employment: null,
        highEduAttainment: null,
        isPWD: null,
        isSeniorCitizen: null,
        isSingleParent: null,
        isStudent: null,
        residencyLength: null,
      },
      imageUrl: null,
    };
  }

  createResident(resident: object): Observable<any> {
    return this.apollo.mutate({
      mutation: RESIDENT_CREATE,
      variables: resident,
      fetchPolicy: 'network-only',
    });
  }
}
