import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-expnav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="assets/logo.png" alt="Logo DeliveryTransport" width="30" height="30" class="me-2">
          <span>DeliveryTransport</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarExpNav"
          aria-controls="navbarExpNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarExpNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" routerLink="/dashboard">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/mes-demandes">Mes Demandes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/creer-demande">Créer Demande</a>
            </li>
          </ul>
          <button class="btn btn-outline-dark" (click)="logout()">Logout</button>
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
export class Expnav {
  logout() {
    console.log('Déconnexion demandée');
  }
}
