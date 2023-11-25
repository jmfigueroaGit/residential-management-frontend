import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { SnackbarService } from 'src/app/core/services/snackbar.service';
import { AuthenticateService } from 'src/app/shared/pipes/authenticate.service';

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
    private snackbarService: SnackbarService,
    private auth: AuthenticateService
  ) {}

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  ngOnInit(): void {
    this.auth.isAutheticated().subscribe((loggedIn) => {
      if (loggedIn) {
        this.navigateTo('/home');
      }
    });
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
          this.navigateTo('/auth/check-mail');
        }
      },
      error: (error) => {
        console.log(error.message);
        this.snackbarService.openSnackBar(error.message);
      },
    });
  }
}
