import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import {
  AUTH_LOGIN_USER,
  AUTH_RESET_PASSWORD,
  AUTH_VERIFY_EMAIL,
  AUTH_VERIFY_TOKEN,
} from '../graphql/mutations/auth.mutation';
import { HttpHeaders } from '@angular/common/http';
import { AUTH_CURRENT_USER } from '../graphql/queries/auth.query';

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

  // @desc    Reset Password
  resetPassword(credential: object): Observable<any> {
    return this.apollo.mutate({
      mutation: AUTH_RESET_PASSWORD,
      variables: credential,
    });
  }

  // @desc    Login User
  loginUser(credential: object): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      withCredentials: true,
    };
    return this.apollo.mutate({
      mutation: AUTH_LOGIN_USER,
      variables: credential,
      context: {
        headers: httpOptions.headers, // Pass the headers with credentials to the request
      },
    });
  }

  isAuthenticated(): Observable<any> {
    return this.apollo
      .query({
        query: AUTH_CURRENT_USER,
        fetchPolicy: 'network-only',
      })
      .pipe(
        map((result) => {
          if (result && result.data && !result.loading) {
            return true;
          } else {
            return false;
          }
        })
      );
  }
}
