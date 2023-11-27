import { gql } from 'apollo-angular';

export const RESIDENT_CREATE = gql`
  mutation Resident_create(
    $name: NameInput!
    $sex: String!
    $birthday: String!
    $civilStatus: String!
    $nationality: String!
    $contactNumber: String!
    $contactPerson: ContactPersonInput!
    $address: AddressInput!
    $background: BackgroundInput
    $imageUrl: String
  ) {
    resident_create(
      name: $name
      sex: $sex
      birthday: $birthday
      civilStatus: $civilStatus
      nationality: $nationality
      contactNumber: $contactNumber
      contactPerson: $contactPerson
      address: $address
      background: $background
      image_url: $imageUrl
    ) {
      _id
      address {
        houseNumber
        street
        barangay
        region
        city
        zipcode
      }
      background {
        employment
        highEduAttainment
        isSeniorCitizen
        isPWD
        isSingleParent
        isStudent
        residencyLength
      }
      barangay {
        _id
      }
      birthday
      civilStatus
      contactNumber
      contactPerson {
        name
        contactNumber
        relationship
        address
      }
      email
      image_url
      name {
        first
        middle
        last
        extension
      }
      nationality
      sex
      slug
    }
  }
`;
