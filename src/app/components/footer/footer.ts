import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="bg-primary text-white pt-4 pb-2">
      <div class="container">
        <div class="row">
          <!-- Company Info -->
          <div class="col-md-4 mb-4">
            <h5 class="d-flex align-items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-truck me-2" viewBox="0 0 16 16">
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>
              TransportPlatform
            </h5>
            <p>La plateforme qui connecte conducteurs et expéditeurs pour un transport collaboratif.</p>
            <div class="social-icons">
              <a href="#" class="text-white me-2"><i class="bi bi-facebook"></i></a>
              <a href="#" class="text-white me-2"><i class="bi bi-twitter"></i></a>
              <a href="#" class="text-white me-2"><i class="bi bi-instagram"></i></a>
              <a href="#" class="text-white"><i class="bi bi-linkedin"></i></a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="col-md-2 mb-4">
            <h5 class="mb-3">Liens rapides</h5>
            <ul class="list-unstyled">
              <li class="mb-2"><a routerLink="/" class="text-white text-decoration-none">Accueil</a></li>
              <li class="mb-2"><a routerLink="/about" class="text-white text-decoration-none">À propos</a></li>
              <li class="mb-2"><a routerLink="/faq" class="text-white text-decoration-none">FAQ</a></li>
              <li class="mb-2"><a routerLink="/terms" class="text-white text-decoration-none">Conditions d'utilisation</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="col-md-3 mb-4">
            <h5 class="mb-3">Contactez-nous</h5>
            <ul class="list-unstyled">
              <li class="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt me-2" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                123 Rue de Transport, Paris
              </li>
              <li class="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone me-2" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                +33 1 23 45 67 89
              </li>
              <li class="mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope me-2" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                </svg>

              </li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div class="col-md-3 mb-4">
            <h5 class="mb-3">Newsletter</h5>
            <p>Abonnez-vous pour recevoir nos dernières actualités.</p>
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="Votre email" aria-label="Votre email">
              <button class="btn btn-light" type="button">S'abonner</button>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="text-center pt-3 border-top">
          <p class="mb-0">&copy; {{currentYear}} TransportPlatform. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #3f51b5 !important;
    }
    footer a:hover {
      color: #ddd !important;
    }
    .social-icons i {
      font-size: 1.2rem;
      transition: all 0.3s;
    }
    .social-icons a:hover i {
      transform: translateY(-3px);
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
