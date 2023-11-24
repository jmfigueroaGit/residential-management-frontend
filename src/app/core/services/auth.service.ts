import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import {
  AUTH_VERIFY_EMAIL,
  AUTH_VERIFY_TOKEN,
} from '../graphql/mutations/auth.mutation';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apollo: Apollo) {}

  // @desc    Register Email
  registerEmail(email: string): Observable<any> {
    return this.apollo.mutate({
      mutation: AUTH_VERIFY_EMAIL,
      variables: { email },
    });
  }

  // @desc    Verify Token
  verifyResetToken(token: String): Observable<any> {
    return this.apollo.mutate({
      mutation: AUTH_VERIFY_TOKEN,
      variables: { token },
    });
  }
}
