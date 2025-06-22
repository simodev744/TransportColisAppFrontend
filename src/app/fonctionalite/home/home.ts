import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <!-- Hero Section -->
      <div class="hero-section">
        <div class="hero-content">
          <h1>Transport Platform</h1>
          <p class="hero-subtitle">La plateforme qui connecte conducteurs et expéditeurs pour un transport collaboratif</p>

          <div class="hero-buttons">
            <a routerLink="/register" class="btn-primary">Commencer maintenant</a>
            <a routerLink="/login" class="btn-secondary">Se connecter</a>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
             alt="Livraison collaborative" class="hero-image"/>
      </div>

      <!-- Features Section -->
      <div class="features-section">
        <h2 class="section-title">Comment ça marche ?</h2>
        <p class="section-subtitle">Une solution simple et efficace pour vos besoins de transport</p>

        <div class="grid grid-3">
          <div class="feature-card">
            <img src="https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                 alt="Conducteur" class="feature-icon"/>
            <h3>Pour les Conducteurs</h3>
            <p>Publiez vos trajets et optimisez vos déplacements en transportant des colis</p>
            <ul>
              <li>Créez des annonces de trajets</li>
              <li>Gérez les demandes reçues</li>
              <li>Suivez votre historique</li>
            </ul>
          </div>

          <div class="feature-card">
            <img src="https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                 alt="Expéditeur" class="feature-icon"/>
            <h3>Pour les Expéditeurs</h3>
            <p>Trouvez des conducteurs pour transporter vos colis en toute sécurité</p>
            <ul>
              <li>Recherchez des trajets disponibles</li>
              <li>Envoyez des demandes de transport</li>
              <li>Suivez vos envois</li>
            </ul>
          </div>

          <div class="feature-card">
            <img src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                 alt="Sécurité" class="feature-icon"/>
            <h3>Sécurisé</h3>
            <p>Une plateforme sécurisée avec vérification des utilisateurs</p>
            <ul>
              <li>Utilisateurs vérifiés</li>
              <li>Système de notation</li>
              <li>Support administrateur</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="stats-section">
        <div class="stat-item">
          <div class="stat-number">10,000+</div>
          <div class="stat-label">Colis transportés</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">5,000+</div>
          <div class="stat-label">Utilisateurs satisfaits</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">85%</div>
          <div class="stat-label">Trajets optimisés</div>
        </div>
      </div>

      <!-- Testimonials Section -->
      <div class="testimonials-section">
        <h2 class="section-title">Ils nous font confiance</h2>

        <div class="grid grid-3">
          <div class="testimonial-card">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                 alt="Témoignage 1" class="testimonial-image"/>
            <p>"J'ai réduit mes coûts de transport de 40% grâce à cette plateforme."</p>
            <div class="testimonial-author">- Marie, e-commerçante</div>
          </div>

          <div class="testimonial-card">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                 alt="Témoignage 2" class="testimonial-image"/>
            <p>"En tant que conducteur, je rentabilise tous mes trajets professionnels."</p>
            <div class="testimonial-author">- Thomas, chauffeur routier</div>
          </div>

          <div class="testimonial-card">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                 alt="Témoignage 3" class="testimonial-image"/>
            <p>"Un système simple et sécurisé pour envoyer mes produits à mes clients."</p>
            <div class="testimonial-author">- Sophie, artisan</div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="cta-section">
        <h2>Prêt à commencer ?</h2>
        <p>Rejoignez notre communauté de transport collaboratif</p>
        <a routerLink="/register" class="btn-primary">S'inscrire gratuitement</a>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .hero-section {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 80px 0;
      gap: 40px;
    }

    .hero-content {
      flex: 1;
    }

    .hero-image {
      flex: 1;
      max-width: 50%;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 20px;
      color: #3f51b5;
    }

    .hero-subtitle {
      font-size: 1.2rem;
      margin-bottom: 40px;
      color: #666;
    }

    .hero-buttons {
      display: flex;
      gap: 20px;
      justify-content: flex-start;
    }

    .btn-primary {
      background-color: #3f51b5;
      color: white;
      padding: 15px 30px;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 500;
      transition: background-color 0.3s;
    }

    .btn-primary:hover {
      background-color: #303f9f;
    }

    .btn-secondary {
      border: 2px solid #3f51b5;
      color: #3f51b5;
      padding: 15px 30px;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s;
    }

    .btn-secondary:hover {
      background-color: #f5f5f5;
    }

    .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 20px;
      color: #3f51b5;
    }

    .section-subtitle {
      text-align: center;
      font-size: 1.1rem;
      margin-bottom: 60px;
      color: #666;
    }

    .grid {
      display: grid;
      gap: 30px;
    }

    .grid-3 {
      grid-template-columns: repeat(3, 1fr);
    }

    .feature-card {
      background: white;
      border-radius: 8px;
      padding: 30px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.3s;
      text-align: center;
    }

    .feature-card:hover {
      transform: translateY(-5px);
    }

    .feature-icon {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 20px;
    }

    .stats-section {
      display: flex;
      justify-content: space-around;
      background: #3f51b5;
      color: white;
      padding: 60px 20px;
      margin: 80px 0;
      border-radius: 8px;
    }

    .stat-item {
      text-align: center;
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .stat-label {
      font-size: 1.1rem;
    }

    .testimonial-card {
      background: white;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      text-align: center;
    }

    .testimonial-image {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 20px;
    }

    .testimonial-author {
      font-weight: bold;
      margin-top: 20px;
      color: #3f51b5;
    }

    .cta-section {
      background: linear-gradient(135deg, #3f51b5, #303f9f);
      color: white;
      text-align: center;
      padding: 60px;
      border-radius: 8px;
      margin: 80px 0;
    }

    .cta-section h2 {
      font-size: 2rem;
      margin-bottom: 20px;
    }

    .cta-section p {
      font-size: 1.1rem;
      margin-bottom: 30px;
    }

    @media (max-width: 768px) {
      .hero-section {
        flex-direction: column;
        padding: 40px 0;
      }

      .hero-image {
        max-width: 100%;
        margin-top: 30px;
      }

      .grid-3 {
        grid-template-columns: 1fr;
      }

      .hero-buttons {
        justify-content: center;
      }

      .stats-section {
        flex-direction: column;
        gap: 30px;
      }
    }
  `]
})
export class Home {

}
