import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { SnackbarService } from 'src/app/core/services/snackbar.service';
import { AuthenticateService } from 'src/app/shared/pipes/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loading: boolean = false;
  loginForm!: FormGroup;
  constructor(
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
      }
    });
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  submit(): void {
    const credential = this.loginForm.value;

    this.login(credential);
  }

  login(credential: object): void {
    this.authService.loginUser(credential).subscribe({
      next: ({ data, loading }) => {
        if (loading) {
          this.loading = true;
        } else {
          this.loading = false;
          this.navigateTo('/home');
        }
      },
      error: (error) => {
        this.loading = false;
        console.error(error.message);
        this.snackbarService.openSnackBar(error.message);
      },
    });
  }
}
