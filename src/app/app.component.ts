import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="app-container">
      <nav class="main-nav">
        <div class="nav-brand">
          <img src="/pokeball.png" alt="Pokeball" class="nav-logo">
          <span>Pokémon Task Manager Proyecto</span>
        </div>
        <ul class="nav-links">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            <i class="fas fa-home"></i> Inicio
          </a></li>
          <li><a routerLink="/about" routerLinkActive="active">
            <i class="fas fa-info-circle"></i> Sobre el Proyecto
          </a></li>
        </ul>
      </nav>

      <main>
        <router-outlet></router-outlet>
      </main>

      <footer class="main-footer">
        <p>Desarrollado por Thomas Repka usando Angular</p>
      </footer>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    }

    .main-nav {
      background: #2c3e50;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .nav-brand {
      display: flex;
      align-items: center;
      gap: 1rem;
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .nav-logo {
      width: 35px;
      height: 35px;
      animation: bounce 2s infinite;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-links a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .nav-links a:hover {
      background: rgba(255,255,255,0.1);
    }

    .nav-links a.active {
      background: #3498db;
    }

    main {
      flex: 1;
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
    }

    .main-footer {
      background: #2c3e50;
      color: white;
      text-align: center;
      padding: 1rem;
      margin-top: auto;
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }

    @media (max-width: 768px) {
      .main-nav {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
      }

      .nav-links {
        width: 100%;
        justify-content: center;
      }
    }
  `]
})
export class AppComponent {
  title = 'pokemon-task-manager';
}