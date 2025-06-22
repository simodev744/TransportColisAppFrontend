import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/auth/auth-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <div class="card shadow-lg p-4" style="width: 100%; max-width: 500px;">
        <div class="text-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#3f51b5" class="bi bi-person-circle mb-3" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
          </svg>
          <h2 class="text-primary">Connexion</h2>
          <p class="text-muted">Veuillez entrer vos identifiants</p>
        </div>

        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="needs-validation" novalidate>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              formControlName="email"
              [class.is-invalid]="form.get('email')?.invalid && form.get('email')?.touched"
              required
            >
            <div class="invalid-feedback" *ngIf="form.get('email')?.errors?.['required']">
              L'email est requis
            </div>
            <div class="invalid-feedback" *ngIf="form.get('email')?.errors?.['email']">
              Veuillez entrer un email valide
            </div>
          </div>

          <div class="mb-4">
            <label for="motDePasse" class="form-label">Mot de passe</label>
            <input
              type="password"
              class="form-control"
              id="motDePasse"
              formControlName="motDePasse"
              [class.is-invalid]="form.get('motDePasse')?.invalid && form.get('motDePasse')?.touched"
              required
            >
            <div class="invalid-feedback" *ngIf="form.get('motDePasse')?.errors?.['required']">
              Le mot de passe est requis
            </div>
          </div>

          <div class="d-grid mb-3">
            <button
              type="submit"
              class="btn btn-primary btn-lg"
              [disabled]="form.invalid"
            >
              Se connecter
            </button>
          </div>

          <div *ngIf="error" class="alert alert-danger text-center">
            {{error}}
          </div>
        </form>

        <div class="text-center mt-3">
          <a routerLink="/forgot-password" class="text-decoration-none">Mot de passe oublié ?</a>
          <p class="mt-2">Pas encore inscrit ? <a routerLink="/register" class="text-primary text-decoration-none">Créer un compte</a></p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .min-vh-100 {
      min-height: 100vh;
    }
    .card {
      border-radius: 15px;
      border: none;
    }
    .btn-primary {
      background-color: #3f51b5;
      border-color: #3f51b5;
    }
    .btn-primary:hover {
      background-color: #303f9f;
      border-color: #303f9f;
    }
    .form-control:focus {
      border-color: #3f51b5;
      box-shadow: 0 0 0 0.25rem rgba(63, 81, 181, 0.25);
    }
  `]
})
export class LoginComponent {
  private fb: FormBuilder = new FormBuilder();
  constructor(private auth: AuthService, private router: Router) {}

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    motDePasse: ['', Validators.required]
  });
  error = '';

  onSubmit() {
    if (this.form.valid) {
      this.auth.logout();
      const { email, motDePasse } = this.form.value;
      this.auth.login(email!, motDePasse!).subscribe({
        next: () => {
          if (this.auth.hasRole("ADMINISTRATEUR")) {
            this.router.navigate(['/admin'])
          }
          else if (this.auth.hasRole("EXPEDITEUR")) {
            this.router.navigate(['/expediteur'])
          }
          else if (this.auth.hasRole("CONDUCTEUR")) {
            this.router.navigate(['/conducteur'])
          }
        },
        error: () => this.error = 'Email ou mot de passe invalide'
      });
    }
  }
}
