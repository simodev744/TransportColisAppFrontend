
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../../core/auth/auth-service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Connexion</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <label>Email: <input formControlName="email" type="email" /></label><br />
      <label>Mot de passe: <input formControlName="motDePasse" type="password" /></label><br />
      <button type="submit" [disabled]="form.invalid">Se connecter</button>
    </form>

    <p *ngIf="error" style="color:red;">{{error}}</p>
  `
})
export class LoginComponent {
  private fb: FormBuilder=new FormBuilder();
  constructor( private auth: AuthService, private router: Router) {}

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    motDePasse: ['', Validators.required]
  });
  error = '';


  onSubmit() {
    if (this.form.valid) {
      const { email, motDePasse } = this.form.value;
      this.auth.login(email!, motDePasse!).subscribe({
        next: () => this.router.navigate(['/home']),
        error: () => this.error = 'Email ou mot de passe invalide'
      });
    }
  }
}
