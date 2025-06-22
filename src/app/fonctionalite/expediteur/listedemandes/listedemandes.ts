import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {DemandeDTO, DemandeService} from '../../../core/expediteur/expediteur-service';

@Component({
  selector: 'app-listedemandes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-4">
      <h2>Liste des Demandes</h2>
      <div class="mb-3">
        <input
          type="email"
          class="form-control"
          placeholder="Email expediteur"
          [(ngModel)]="expediteurEmail"
        />
        <button class="btn btn-primary mt-2" (click)="loadDemandes()">Charger</button>
      </div>

      <div *ngIf="loading" class="text-center my-3">
        <div class="spinner-border text-primary" role="status"></div>
      </div>

      <div *ngIf="!loading && demandes.length === 0" class="alert alert-info">
        Aucune demande trouvée.
      </div>

      <div class="row">
        <div class="col-md-4 mb-3" *ngFor="let demande of pagedDemandes">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Demande #{{ demande.demandeId }}</h5>
              <p class="card-text"><strong>Description:</strong> {{ demande.description }}</p>
              <p class="card-text"><strong>Status:</strong> {{ demande.status }}</p>
              <p class="card-text"><strong>Date:</strong> {{ demande.date | date:'medium' }}</p>
            </div>
          </div>
        </div>
      </div>

      <nav *ngIf="demandes.length > pageSize" aria-label="Pagination">
        <ul class="pagination justify-content-center">
          <li class="page-item" [class.disabled]="currentPage === 1">
            <button class="page-link" (click)="prevPage()">Précédent</button>
          </li>
          <li
            class="page-item"
            *ngFor="let page of totalPagesArray"
            [class.active]="page === currentPage"
          >
            <button class="page-link" (click)="goToPage(page)">{{ page }}</button>
          </li>
          <li class="page-item" [class.disabled]="currentPage === totalPages">
            <button class="page-link" (click)="nextPage()">Suivant</button>
          </li>
        </ul>
      </nav>
    </div>
  `,
  styles: [`
    .card {
      box-shadow: 0 0 8px rgba(0,0,0,0.1);
    }
  `],
})
export class Listedemandes {
  expediteurEmail = '';
  demandes: DemandeDTO[] = [];
  pagedDemandes: DemandeDTO[] = [];
  loading = false;

  pageSize = 6;
  currentPage = 1;
  totalPages = 1;

  constructor(private demandeService: DemandeService) {}

  loadDemandes() {
    if (!this.expediteurEmail.trim()) return;

    this.loading = true;
    this.demandeService.getDemandesByExpediteur(this.expediteurEmail).subscribe({
      next: (data) => {
        this.demandes = data;
        this.totalPages = Math.ceil(this.demandes.length / this.pageSize);
        this.currentPage = 1;
        this.updatePagedDemandes();
        this.loading = false;
      },
      error: () => {
        this.demandes = [];
        this.pagedDemandes = [];
        this.loading = false;
      },
    });
  }

  updatePagedDemandes() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedDemandes = this.demandes.slice(start, start + this.pageSize);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagedDemandes();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedDemandes();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedDemandes();
    }
  }

  get totalPagesArray(): number[] {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }
}
