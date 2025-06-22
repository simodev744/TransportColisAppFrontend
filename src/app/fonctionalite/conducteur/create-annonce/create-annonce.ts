import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AnnonceDTO, AnnonceService} from '../../../core/conducteur/conducteur-service';


@Component({
  selector: 'app-create-annonce',
  standalone: true,
  imports: [
    FormsModule
  ],
  template: `
    <div class="container mt-4">
      <h2>Créer une Annonce</h2>
      <form (ngSubmit)="submitAnnonce()">
        <div class="mb-3">
          <label class="form-label">Départ</label>
          <input type="text" class="form-control" [(ngModel)]="annonce.depart" name="depart">
        </div>

        <div class="mb-3">
          <label class="form-label">Étapes (séparées par virgules)</label>
          <input type="text" class="form-control" [(ngModel)]="etapesInput" name="etapes">
        </div>

        <div class="mb-3">
          <label class="form-label">Arrivée</label>
          <input type="text" class="form-control" [(ngModel)]="annonce.arrivee" name="arrivee">
        </div>

        <div class="mb-3">
          <label class="form-label">Type</label>
          <input type="text" class="form-control" [(ngModel)]="annonce.type" name="type">
        </div>

        <div class="mb-3">
          <label class="form-label">Capacité</label>
          <input type="text" class="form-control" [(ngModel)]="annonce.capacite" name="capacite">
        </div>

        <div class="mb-3">
          <label class="form-label">Statut</label>
          <input type="text" class="form-control" [(ngModel)]="annonce.status" name="status">
        </div>

        <div class="mb-3">
          <label class="form-label">Conducteur ID</label>
          <input type="number" class="form-control" [(ngModel)]="annonce.conducteurId" name="conducteurId">
        </div>

        <button type="submit" class="btn btn-primary">Créer</button>
      </form>
    </div>
  `,
})
export class CreateAnnonceComponent {
  annonce: AnnonceDTO = {
    id: 0,
    depart: '',
    etapes: [],
    arrivee: '',
    type: '',
    capacite: '',
    status: '',
    conducteurId: 0,
  };

  etapesInput: string = '';

  constructor(private annonceService: AnnonceService) {}

  submitAnnonce() {
    this.annonce.etapes = this.etapesInput
      .split(',')
      .map(e => e.trim())
      .filter(e => e);

    this.annonceService.createAnnonce(this.annonce).subscribe({
      next: res => {
        console.log('Annonce créée :', res);
        // Réinitialisation simple
        this.annonce = {
          id: 0,
          depart: '',
          etapes: [],
          arrivee: '',
          type: '',
          capacite: '',
          status: '',
          conducteurId: 0,
        };
        this.etapesInput = '';
      },
      error: err => console.error(err)
    });
  }
}
