import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {DemandeReqDTO, DemandeService} from '../../../core/expediteur/expediteur-service';
// adapte le chemin

@Component({
  selector: 'app-create-demande',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-4">
      <h2>Créer une Demande</h2>
      <form (ngSubmit)="submit()" #demandeForm="ngForm">
        <div class="mb-3">
          <label class="form-label">Dimensions</label>
          <input type="text" class="form-control" [(ngModel)]="demande.dimensions" name="dimensions" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Type</label>
          <input type="text" class="form-control" [(ngModel)]="demande.type" name="type" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Poids</label>
          <input type="text" class="form-control" [(ngModel)]="demande.poids" name="poids" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Description</label>
          <textarea class="form-control" [(ngModel)]="demande.description" name="description" required></textarea>
        </div>
        <div class="mb-3">
          <label class="form-label">Status</label>
          <input type="text" class="form-control" [(ngModel)]="demande.status" name="status" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Email Expediteur</label>
          <input type="email" class="form-control" [(ngModel)]="demande.expediteurEmail" name="expediteurEmail" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Annonce ID</label>
          <input type="number" class="form-control" [(ngModel)]="demande.annonceId" name="annonceId" required />
        </div>
        <button type="submit" class="btn btn-primary" [disabled]="loading">
          {{ loading ? 'Envoi...' : 'Créer Demande' }}
        </button>
      </form>
      <div *ngIf="message" class="mt-3 alert alert-info">{{ message }}</div>
    </div>
  `,
  styles: []
})
export class CreateDemande {
  demande: DemandeReqDTO = {
    dimensions: '',
    type: '',
    poids: '',
    description: '',
    status: '',
    expediteurEmail: '',
    annonceId: 0
  };

  loading = false;
  message = '';

  constructor(private demandeService: DemandeService) {}

  submit() {
    this.loading = true;
    this.message = '';
    this.demandeService.createDemandeWithColis(this.demande).subscribe({
      next: (res) => {
        this.message = res.message;
        this.loading = false;
        this.resetForm();
      },
      error: () => {
        this.message = 'Erreur lors de la création de la demande.';
        this.loading = false;
      }
    });
  }

  resetForm() {
    this.demande = {
      dimensions: '',
      type: '',
      poids: '',
      description: '',
      status: '',
      expediteurEmail: '',
      annonceId: 0
    };
  }
}
