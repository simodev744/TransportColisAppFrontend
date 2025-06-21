
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../../core/auth/auth-service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Inscription</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <label>Nom: <input formControlName="nom" /></label><br />
      <label>Email: <input formControlName="email" type="email" /></label><br />
      <label>Mot de passe: <input formControlName="motDePasse" type="password" /></label><br />
      <label>Role:
        <select formControlName="role">
          <option value="EXPEDITEUR">Expéditeur</option>
          <option value="CONDUCTEUR">Conducteur</option>
          <option value="ADMINISTRATEUR">Administrateur</option>
        </select>
      </label><br />
      <button type="submit" [disabled]="form.invalid">S'inscrire</button>
    </form>
    <p *ngIf="error" style="color:red;">{{error}}</p>
  `
})
export class RegisterComponent {
  private fb: FormBuilder=new FormBuilder();
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
        next: () =>{

            if (this.auth.hasRole("ADMINISTRATEUR")){
              this.router.navigate(['/admin'])
            }
            else if (this.auth.hasRole("EXPEDITEUR")){
              this.router.navigate(['/expediteur'])
            }
            else if (this.auth.hasRole("CONDUCTEUR")){
              this.router.navigate(['/conducteur'])
            }

        }
        ,
        error: () => this.error = 'Erreur lors de l\'inscription'
      });
    }
  }
}
