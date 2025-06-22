import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ExpNav} from '../../../conducteur/exp-nav/exp-nav';

@Component({
  selector: 'app-dashboard-expediteur',
  standalone: true,
  imports: [CommonModule, RouterModule, ExpNav],
  template: `
    <app-exp-nav></app-exp-nav>
    <router-outlet></router-outlet>
    <div class="container mt-4">
      <h2>Tableau de bord Expéditeur</h2>
      <div class="row g-4 mt-3">
        <div class="col-md-4">
          <div class="card shadow-sm clickable-card" routerLink="/listedemandes">
            <div class="card-body text-center">
              <h5 class="card-title">Mes Demandes</h5>
              <p class="card-text">Voir la liste de toutes mes demandes envoyées.</p>
              <button class="btn btn-primary">Accéder</button>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card shadow-sm clickable-card" routerLink="/create">
            <div class="card-body text-center">
              <h5 class="card-title">Créer une Demande</h5>
              <p class="card-text">Ajouter une nouvelle demande de colis.</p>
              <button class="btn btn-success">Créer</button>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card shadow-sm clickable-card" routerLink="/listeannonce">
            <div class="card-body text-center">
              <h5 class="card-title">Mes Annonces</h5>
              <p class="card-text">Consulter vos annonces publiées.</p>
              <button class="btn btn-info text-white">Voir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .clickable-card {
      cursor: pointer;
      transition: transform 0.2s ease-in-out;
    }
    .clickable-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }
  `]
})
export class DashboardExpediteur {}
