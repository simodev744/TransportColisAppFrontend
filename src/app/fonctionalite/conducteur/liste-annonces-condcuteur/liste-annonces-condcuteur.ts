import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AnnonceDTO, AnnonceService} from '../../../core/conducteur/conducteur-service';


@Component({
  selector: 'app-liste-annonces-condcuteur',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-4">
      <h2>Mes Annonces</h2>

      <div class="mb-3">
        <label for="conducteurId" class="form-label">Conducteur ID</label>
        <input type="number" id="conducteurId" class="form-control" [(ngModel)]="conducteurId">
        <button class="btn btn-primary mt-2" (click)="loadAnnonces()">Charger les annonces</button>
      </div>

      <div *ngIf="annonces.length > 0; else noData">
        <div *ngFor="let annonce of annonces" class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">{{ annonce.depart }} → {{ annonce.arrivee }}</h5>
            <p class="card-text"><strong>Type:</strong> {{ annonce.type }}</p>
            <p class="card-text"><strong>Capacité:</strong> {{ annonce.capacite }}</p>
            <p class="card-text"><strong>Statut:</strong> {{ annonce.status }}</p>
            <p class="card-text"><strong>Étapes:</strong> {{ annonce.etapes.join(', ') }}</p>
          </div>
        </div>
      </div>

      <ng-template #noData>
        <p>Aucune annonce trouvée.</p>
      </ng-template>
    </div>
  `,
  styles: []
})
export class ListeAnnoncesCondcuteur implements OnInit {
  conducteurId: number = 1; // Valeur par défaut
  annonces: AnnonceDTO[] = [];

  constructor(private annonceService: AnnonceService) {}

  ngOnInit() {
    this.loadAnnonces(); // Charger par défaut
  }

  loadAnnonces() {
    if (!this.conducteurId) return;

    this.annonceService.getAnnoncesByConducteur(this.conducteurId).subscribe({
      next: (data) => (this.annonces = data),
      error: (err) => console.error('Erreur lors du chargement :', err)
    });
  }
}
