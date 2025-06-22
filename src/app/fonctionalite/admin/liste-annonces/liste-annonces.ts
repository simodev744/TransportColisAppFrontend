import { Component, OnInit, inject } from '@angular/core';
import { AdminService } from '../../../core/admin/admin-service';
import { Annonce } from '../../../models/Annonce';

@Component({
  selector: 'app-liste-annonces',
  templateUrl: './liste-annonces.html',
  styleUrls: ['./liste-annonces.css'],
})
export class ListeAnnoncesComponent implements OnInit {
  private adminService = inject(AdminService);

  annonces: Annonce[] = [];
  pagedAnnonces: Annonce[] = [];
  currentPage = 1;
  pageSize = 5;

  newAnnonce: Annonce = this.getEmptyAnnonce();
  editAnnonceData: Annonce | null = null;

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

  updateAnnonce(): void {
    if (!this.editAnnonceData?.id) return;

    this.adminService.updateAnnonce(this.editAnnonceData.id, this.editAnnonceData).subscribe((updated) => {
      const index = this.annonces.findIndex(a => a.id === updated.id);
      if (index !== -1) this.annonces[index] = updated;
      this.editAnnonceData = null;
      this.setPagedAnnonces();
    });
  }

  cancelEdit(): void {
    this.editAnnonceData = null;
  }
}
