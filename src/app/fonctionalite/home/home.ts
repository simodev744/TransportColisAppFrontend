import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `




    <div class="container">
      <div class="text-center" style="padding: 60px 0;">
        <h1 style="font-size: 3rem; margin-bottom: 20px; color: #3f51b5;">
          Transport Platform
        </h1>
        <p style="font-size: 1.2rem; margin-bottom: 40px; color: #666;">
          La plateforme qui connecte conducteurs et expéditeurs pour un transport collaboratif
        </p>

        <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
          <a routerLink="/register" class="btn-primary" style="text-decoration: none; font-size: 1.1rem; padding: 15px 30px;">
            Commencer maintenant
          </a>
          <a routerLink="/login" class="btn-secondary" style="text-decoration: none; font-size: 1.1rem; padding: 15px 30px;">
            Se connecter
          </a>
        </div>
      </div>
      <img src="/image.jpg" alt="image"/>


      <div class="grid grid-3" style="margin-top: 60px;">
        <div class="card text-center">
          <div style="font-size: 3rem; margin-bottom: 20px;">🚛</div>
          <h3>Pour les Conducteurs</h3>
          <p>Publiez vos trajets et optimisez vos déplacements en transportant des colis</p>
          <ul style="text-align: left; margin-top: 15px;">
            <li>Créez des annonces de trajets</li>
            <li>Gérez les demandes reçues</li>
            <li>Suivez votre historique</li>
          </ul>
        </div>

        <div class="card text-center">
          <div style="font-size: 3rem; margin-bottom: 20px;">📦</div>
          <h3>Pour les Expéditeurs</h3>
          <p>Trouvez des conducteurs pour transporter vos colis en toute sécurité</p>
          <ul style="text-align: left; margin-top: 15px;">
            <li>Recherchez des trajets disponibles</li>
            <li>Envoyez des demandes de transport</li>
            <li>Suivez vos envois</li>
          </ul>
        </div>

        <div class="card text-center">
          <div style="font-size: 3rem; margin-bottom: 20px;">🛡️</div>
          <h3>Sécurisé</h3>
          <p>Une plateforme sécurisée avec vérification des utilisateurs</p>
          <ul style="text-align: left; margin-top: 15px;">
            <li>Utilisateurs vérifiés</li>
            <li>Système de notation</li>
            <li>Support administrateur</li>
          </ul>
        </div>
      </div>

      <div class="card text-center" style="margin-top: 60px; background: linear-gradient(135deg, #3f51b5, #303f9f); color: white;">
        <h2 style="margin-bottom: 20px;">Prêt à commencer ?</h2>
        <p style="font-size: 1.1rem; margin-bottom: 30px;">
          Rejoignez notre communauté de transport collaboratif
        </p>
        <a routerLink="/register" class="btn-primary" style="text-decoration: none; background: white; color: #3f51b5;">
          S'inscrire gratuitement
        </a>
      </div>
    </div>
  `
})
export class Home{

}
