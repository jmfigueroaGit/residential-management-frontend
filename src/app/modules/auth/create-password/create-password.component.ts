import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { SnackbarService } from 'src/app/core/services/snackbar.service';
import { AuthenticateService } from 'src/app/shared/pipes/authenticate.service';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss'],
})
export class CreatePasswordComponent implements OnInit {
  token!: string;
  loading: boolean = false;
  createPasswordForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackbarService: SnackbarService,
    private auth: AuthenticateService
  ) {}

  ngOnInit(): void {
    this.auth.isAutheticated().subscribe((loggedIn) => {
      if (loggedIn) {
        this.navigateTo('/home');
      } else {
        this.route.params.subscribe((params) => {
          this.token = params['token'];
          this.verifyToken(this.token);
        });
      }
    });

    this.initForm();
  }

  initForm(): void {
    this.createPasswordForm = this.formBuilder.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  verifyToken(token: string) {
    this.authService.verifyResetToken(token).subscribe({
      next: ({ data, loading }) => {
        if (loading) {
          console.log('Loading...');
        } else
          this.snackbarService.openSnackBar(data.auth_verify_token.message);
      },
      error: (error) => {
        console.error(error.message);
        this.snackbarService.openSnackBar(error.message);
        this.navigateTo('');
      },
    });
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  resetPassword(credential: object): void {
    this.authService.resetPassword(credential).subscribe({
      next: ({ data, loading }) => {
        if (loading) {
          this.loading = true;
        } else {
          this.loading = false;
          this.snackbarService.openSnackBar(data.auth_reset_password.message);
          this.navigateTo('');
        }
      },
      error: (error) => {
        console.log(error.message);
        this.snackbarService.openSnackBar(error.message);
      },
    });
  }

  submit(): void {
    const form = this.createPasswordForm.value;

    if (form.password !== form.confirmPassword) {
      this.snackbarService.openSnackBar("Passwords don't match");
    } else {
      const credential: object = {
        password: form.password,
        confirmPassword: form.password,
        token: this.token,
      };

      this.resetPassword(credential);
    }
  }
}
