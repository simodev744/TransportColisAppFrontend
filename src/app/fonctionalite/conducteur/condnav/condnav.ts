import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-condnav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="assets/logo.png" alt="Logo DeliveryTransport" width="30" height="30" class="me-2">
          <span>DeliveryTransport</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCondNav"
          aria-controls="navbarCondNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCondNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" routerLink="/dashboard">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/annonces">Mes Annonces</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/create-annonce">Créer Annonce</a>
            </li>
          </ul>
          <button class="btn btn-outline-light" (click)="logout()">Logout</button>
        </div>
      </div>
    </nav>
  `,
  styles: [`

    .navbar-brand span {
      font-weight: 700;
      font-size: 1.25rem;
    }
  `]
})
export class Condnav {
  logout() {

    console.log('Déconnexion demandée');
  }
}
