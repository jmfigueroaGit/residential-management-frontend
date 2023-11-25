import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { map, catchError, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor(private authService: AuthService) {}

  isAutheticated(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      map((data) => {
        if (data) {
          return true;
        } else {
          return false;
        }
      }),
      catchError((error) => {
        console.error('Authentication error:', error);
        // Redirect to an error route or handle the error as needed
        return of(false); // Return false in case of an error
      })
    );
  }
}
