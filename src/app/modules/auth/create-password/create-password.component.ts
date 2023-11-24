import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { SnackbarService } from 'src/app/core/services/snackbar.service';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss'],
})
export class CreatePasswordComponent implements OnInit {
  token!: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.token = params['token'];
      this.verifyToken(this.token);
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
}
