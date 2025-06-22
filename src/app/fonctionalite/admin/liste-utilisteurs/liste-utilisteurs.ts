import { Component, OnInit, inject } from '@angular/core';
import { AdminService } from '../../../core/admin/admin-service';
import { CommonModule } from '@angular/common';

export interface Utilistaeur {
  email: string;
  id?: number;
  nom: string;
  role: string;
}

@Component({
  selector: 'app-liste-utilisteurs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <h2>Liste des Utilisateurs</h2>
      <div class="row g-3">
        <div *ngFor="let user of pagedUtilisateurs" class="col-md-4">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">{{ user.nom }}</h5>
              <p class="card-text"><strong>Email:</strong> {{ user.email }}</p>
              <p class="card-text"><strong>Rôle:</strong> {{ user.role }}</p>
              <button class="btn btn-danger btn-sm" (click)="deleteUser(user.id)">Supprimer</button>
            </div>
          </div>
        </div>
      </div>

      <nav class="mt-4" *ngIf="totalPages > 1">
        <ul class="pagination justify-content-center">
          <li class="page-item" [class.disabled]="currentPage === 1">
            <button class="page-link" (click)="prevPage()">Précédent</button>
          </li>

          <li class="page-item" *ngFor="let page of pagesArray()" [class.active]="page === currentPage">
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
      cursor: default;
    }
  `]
})
export class ListeUtilisteurs implements OnInit {

  private adminService = inject(AdminService);

  utilisateurs: Utilistaeur[] = [];
  pagedUtilisateurs: Utilistaeur[] = [];

  currentPage = 1;
  pageSize = 6;
  totalPages = 1;

  ngOnInit(): void {
    this.loadUtilisateurs();
  }

  loadUtilisateurs() {
    this.adminService.getUtilisateurs().subscribe(users => {
      this.utilisateurs = users;
      this.totalPages = Math.ceil(this.utilisateurs.length / this.pageSize);
      this.updatePagedUtilisateurs();
    });
  }

  updatePagedUtilisateurs() {
    const start = (this.currentPage - 1) * this.pageSize;
    this.pagedUtilisateurs = this.utilisateurs.slice(start, start + this.pageSize);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagedUtilisateurs();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagedUtilisateurs();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagedUtilisateurs();
    }
  }

  pagesArray(): number[] {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }

  deleteUser(id?: number) {
    if (!id) return;
    if (!confirm('Confirmez-vous la suppression ?')) return;

    this.adminService.deleteUtilisateurbyId(BigInt(id)).subscribe(() => {
      this.utilisateurs = this.utilisateurs.filter(u => u.id !== id);
      this.totalPages = Math.ceil(this.utilisateurs.length / this.pageSize);
      if (this.currentPage > this.totalPages) this.currentPage = this.totalPages || 1;
      this.updatePagedUtilisateurs();
    });
  }
}
