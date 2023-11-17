import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GET_USERS } from '../graphql/queries/user.mutation';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apollo: Apollo) {}

  getUsers(): Observable<any> {
    return this.apollo
      .watchQuery<any>({ query: GET_USERS })
      .valueChanges.pipe(map((result) => result.data));
  }
}
