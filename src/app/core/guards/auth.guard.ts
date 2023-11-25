import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { map, catchError, of } from 'rxjs';

export const AuthenticatedGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated().pipe(
    map((data) => {
      if (data) {
        return true;
      } else {
        return router.parseUrl('');
      }
    }),
    catchError((error) => {
      console.error('Authentication error:', error);
      // Redirect to an error route or handle the error as needed
      return of(router.parseUrl('')); // Replace '/error' with your error route
    })
  );
};
