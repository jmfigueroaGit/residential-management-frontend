export interface ResidentData {
  name: {
    first: string | null;
    middle: string | null;
    last: string | null;
    extension: string | null;
  };
  sex: string | null;
  birthday: string | null;
  civilStatus: string | null;
  nationality: string | null;
  contactNumber: string | null;
  email: string | null;
  contactPerson: {
    name: string | null;
    contactNumber: string | null;
    relationship: string | null;
    address: string | null;
  };
  address: {
    houseNumber: string | null;
    street: string | null;
    barangay: string | null;
    city: string | null;
    region: string | null;
    zipcode: string | null;
  };
  background: {
    employment: string | null;
    highEduAttainment: string | null;
    isPWD: boolean | null;
    isSeniorCitizen: boolean | null;
    isSingleParent: boolean | null;
    isStudent: boolean | null;
    residencyLength: number | null;
  };
  imageUrl: string | null;
}
