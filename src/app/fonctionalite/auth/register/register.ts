import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/auth/auth-service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
      <div class="card shadow-lg p-4" style="width: 100%; max-width: 500px;">
        <div class="text-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#3f51b5" class="bi bi-person-plus-fill mb-3" viewBox="0 0 16 16">
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
          <h2 class="text-primary">Inscription</h2>
          <p class="text-muted">Créez votre compte TransportPlatform</p>
        </div>

        <form [formGroup]="form" (ngSubmit)="onSubmit()" class="needs-validation" novalidate>
          <div class="mb-3">
            <label for="nom" class="form-label">Nom complet</label>
            <input
              type="text"
              class="form-control"
              id="nom"
              formControlName="nom"
              [class.is-invalid]="form.get('nom')?.invalid && form.get('nom')?.touched"
              required
            >
            <div class="invalid-feedback" *ngIf="form.get('nom')?.errors?.['required']">
              Le nom est requis
            </div>
          </div>

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

          <div class="mb-3">
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

          <div class="mb-4">
            <label for="role" class="form-label">Rôle</label>
            <select
              class="form-select"
              id="role"
              formControlName="role"
              [class.is-invalid]="form.get('role')?.invalid && form.get('role')?.touched"
              required
            >
              <option value="EXPEDITEUR">Expéditeur</option>
              <option value="CONDUCTEUR">Conducteur</option>
              <option value="ADMINISTRATEUR">Administrateur</option>
            </select>
            <div class="invalid-feedback" *ngIf="form.get('role')?.errors?.['required']">
              Veuillez sélectionner un rôle
            </div>
          </div>

          <div class="d-grid mb-3">
            <button
              type="submit"
              class="btn btn-primary btn-lg"
              [disabled]="form.invalid"
            >
              S'inscrire
            </button>
          </div>

          <div *ngIf="error" class="alert alert-danger text-center">
            {{error}}
          </div>
        </form>

        <div class="text-center mt-3">
          <p>Déjà inscrit ? <a routerLink="/login" class="text-primary text-decoration-none">Se connecter</a></p>
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
    .form-control:focus, .form-select:focus {
      border-color: #3f51b5;
      box-shadow: 0 0 0 0.25rem rgba(63, 81, 181, 0.25);
    }
  `]
})
export class RegisterComponent {
  private fb: FormBuilder = new FormBuilder();
  form = this.fb.group({
    nom: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    motDePasse: ['', Validators.required],
    role: ['EXPEDITEUR', Validators.required]
  });
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    if (this.form.valid) {
      this.auth.logout();
      const { nom, email, motDePasse, role } = this.form.value;
      this.auth.register(nom!, email!, motDePasse!, role!).subscribe({
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
        error: () => this.error = 'Erreur lors de l\'inscription'
      });
    }
  }
}
