import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar">
      <div class="logo">AdminPanel</div>
      <ul class="nav-links">
        <li><a routerLink="/admin/dashboard">Dashboard</a></li>
        <li><a routerLink="/admin/utilisateurs">Utilisateurs</a></li>
        <li><a routerLink="/admin/annonces">Annonces</a></li>
        <li><a routerLink="/admin/stats">Stats</a></li>
      </ul>
      <div class="logout">
        <button (click)="logout()">Se déconnecter</button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background-color: #1e293b; /* dark blue-gray */
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: #60a5fa; /* light blue */
    }

    .nav-links {
      list-style: none;
      display: flex;
      gap: 1.5rem;
    }

    .nav-links a {
      text-decoration: none;
      color: #f1f5f9;
      font-weight: 500;
      transition: color 0.2s;
    }

    .nav-links a:hover {
      color: #38bdf8;
    }

    .logout button {
      background-color: #ef4444;
      border: none;
      color: white;
      padding: 0.5rem 1rem;
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .logout button:hover {
      background-color: #dc2626;
    }

    @media (max-width: 768px) {
      .nav-links {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  `]
})
export class AdminNavbarComponent {
  logout() {

    console.log('Déconnexion');
  }
}
