import { Component, OnInit, inject } from '@angular/core';
import { AdminService } from '../../../core/admin/admin-service';
import { Annonce } from '../../../models/Annonce';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-annonces',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-4">
      <h2>Liste des Annonces</h2>

      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">Ajouter une Annonce</h5>
          <div class="row g-2">
            <div class="col-md-4">
              <input [(ngModel)]="newAnnonce.depart" class="form-control" placeholder="Départ" />
            </div>
            <div class="col-md-4">
              <input [(ngModel)]="newAnnonce.arrivee" class="form-control" placeholder="Arrivée" />
            </div>
            <div class="col-md-4">
              <input [(ngModel)]="newAnnonce.type" class="form-control" placeholder="Type" />
            </div>
            <div class="col-md-4 mt-2">
              <input [(ngModel)]="newAnnonce.capacite" class="form-control" placeholder="Capacité" />
            </div>
            <div class="col-md-4 mt-2">
              <input [(ngModel)]="newAnnonce.status" class="form-control" placeholder="Statut" />
            </div>
            <div class="col-md-4 mt-2">
              <input [(ngModel)]="newAnnonce.conducteurId" type="number" class="form-control" placeholder="ID Conducteur" />
            </div>
          </div>
          <button class="btn btn-success mt-3" (click)="addAnnonce()">Ajouter</button>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 mb-3" *ngFor="let annonce of pagedAnnonces">
          <div class="card h-100 shadow-sm">
            <div class="card-body" *ngIf="!isEditing(annonce.id)">
              <h5 class="card-title">Annonce #{{ annonce.id }}</h5>
              <p><strong>Départ:</strong> {{ annonce.depart }}</p>
              <p><strong>Arrivée:</strong> {{ annonce.arrivee }}</p>
              <p><strong>Type:</strong> {{ annonce.type }}</p>
              <p><strong>Capacité:</strong> {{ annonce.capacite }}</p>
              <p><strong>Statut:</strong> {{ annonce.status }}</p>
              <p><strong>Conducteur:</strong> {{ annonce.conducteurId }}</p>
              <button class="btn btn-sm btn-primary me-2" (click)="startEdit(annonce)">Modifier</button>
              <button class="btn btn-sm btn-danger" (click)="deleteAnnonce(annonce.id!)">Supprimer</button>
            </div>

            <div class="card-body" *ngIf="isEditing(annonce.id)">
              <h5 class="card-title">Modifier Annonce</h5>
              <input [(ngModel)]="editAnnonceData.depart" class="form-control mb-2" />
              <input [(ngModel)]="editAnnonceData.arrivee" class="form-control mb-2" />
              <input [(ngModel)]="editAnnonceData.type" class="form-control mb-2" />
              <input [(ngModel)]="editAnnonceData.capacite" class="form-control mb-2" />
              <input [(ngModel)]="editAnnonceData.status" class="form-control mb-2" />
              <input [(ngModel)]="editAnnonceData.conducteurId" type="number" class="form-control mb-2" />
              <button class="btn btn-success me-2" (click)="updateAnnonce()">Enregistrer</button>
              <button class="btn btn-secondary" (click)="cancelEdit()">Annuler</button>
            </div>
          </div>
        </div>
      </div>

      <nav *ngIf="annonces.length > pageSize" class="mt-4">
        <ul class="pagination justify-content-center">
          <li class="page-item" [class.disabled]="currentPage === 1">
            <button class="page-link" (click)="prevPage()">Précédent</button>
          </li>
          <li class="page-item disabled"><span class="page-link">{{ currentPage }}</span></li>
          <li class="page-item" [class.disabled]="currentPage * pageSize >= annonces.length">
            <button class="page-link" (click)="nextPage()">Suivant</button>
          </li>
        </ul>
      </nav>
    </div>
  `,
  styles: [`
    .card { transition: box-shadow 0.2s; }
    .card:hover { box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); }
  `]
})
export class ListeAnnoncesComponent implements OnInit {
  private adminService = inject(AdminService);

  annonces: Annonce[] = [];
  pagedAnnonces: Annonce[] = [];
  currentPage = 1;
  pageSize = 5;

  newAnnonce: Annonce = this.getEmptyAnnonce();
  editAnnonceData: Annonce = this.getEmptyAnnonce();

  ngOnInit(): void {
    this.loadAnnonces();
  }

  getEmptyAnnonce(): Annonce {
    return {
      depart: '',
      etapes: [],
      arrivee: '',
      type: '',
      capacite: '',
      status: '',
      conducteurId: 0
    };
  }

  loadAnnonces(): void {
    this.adminService.getAnnonces().subscribe((data) => {
      this.annonces = data;
      this.setPagedAnnonces();
    });
  }

  setPagedAnnonces(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedAnnonces = this.annonces.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage * this.pageSize < this.annonces.length) {
      this.currentPage++;
      this.setPagedAnnonces();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.setPagedAnnonces();
    }
  }

  addAnnonce(): void {
    this.adminService.addAnnonce(this.newAnnonce).subscribe((created) => {
      //this.annonces.push(created);
      this.newAnnonce = this.getEmptyAnnonce();
      this.setPagedAnnonces();
    });
  }

  deleteAnnonce(id: number): void {
    this.adminService.deleteAnnonce(id).subscribe(() => {
      this.annonces = this.annonces.filter(a => a.id !== id);
      this.setPagedAnnonces();
    });
  }

  startEdit(annonce: Annonce): void {
    this.editAnnonceData = { ...annonce };
  }

  isEditing(id?: number): boolean {
    return this.editAnnonceData?.id === id;
  }

  cancelEdit(): void {
    this.editAnnonceData = this.getEmptyAnnonce();
  }

  updateAnnonce(): void {
    if (!this.editAnnonceData.id) return;
    this.adminService.updateAnnonce(this.editAnnonceData.id, this.editAnnonceData).subscribe((updated) => {
      const index = this.annonces.findIndex(a => a.id === updated.id);
      if (index !== -1) this.annonces[index] = updated;
      this.editAnnonceData = this.getEmptyAnnonce();
      this.setPagedAnnonces();
    });
  }
}
