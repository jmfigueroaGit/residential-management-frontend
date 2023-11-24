import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string): void {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      duration: 1000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
}
