import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { SnackbarService } from 'src/app/core/services/snackbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  loading: boolean = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }

  registerEmail(email: string): void {
    this.authService.registerEmail(email).subscribe({
      next: ({ data, loading }) => {
        if (loading) {
          this.loading = true;
        } else {
          this.snackbarService.openSnackBar(data.auth_verify.message);
          this.router.navigateByUrl('/auth/check-mail');
        }
      },
      error: (error) => {
        console.log(error.message);
        this.snackbarService.openSnackBar(error.message);
      },
    });
  }
}

/*
    this.authService.registerEmail(email).subscribe(
      ({ data, loading }) => {
        if (loading) {
          this.loading = true;
        } else {
          this.snackbarService.openSnackBar(data.message);
          this.router.navigateByUrl('/auth/check-mail');
        }
      },
      (error) => {
        console.log('there was an error sending the query', error);
      }
    );
*/
