import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="about-container">
      <h1>Sobre el Proyecto</h1>
      
      <section class="tech-section">
        <h2>🛠️ Tecnologías Utilizadas</h2>
        <div class="tech-grid">
          <div class="tech-card">
            <i class="fab fa-angular"></i>
            <h3>Angular 17</h3>
            <p>Framework principal del proyecto, utilizando las últimas características como Control Flow y Standalone Components.</p>
          </div>

          <div class="tech-card">
            <i class="fas fa-server"></i>
            <h3>PokéAPI</h3>
            <p>API RESTful que proporciona toda la información sobre Pokémon de manera estructurada.</p>
          </div>


         
        </div>
      </section>

      <section class="features-section">
        <h2>✨ Características Principales</h2>
        <ul class="features-list">
          <li>Gestión de tareas con boton de eliminar</li>
          <li>Integración con PokéAPI para mostrar Pokémon aleatorios</li>
          <li>Búsqueda de Pokémon por nombre</li>
          <li>Diseño responsive y adaptable</li>
        </ul>
      </section>

      
    </div>
  `,
  styles: [`
    .about-container {
      background: white;
      border-radius: 15px;
      padding: 2rem;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    h1 {
      color: #2c3e50;
      margin-bottom: 2rem;
      text-align: center;
    }

    section {
      margin-bottom: 3rem;
    }

    h2 {
      color: #3498db;
      margin-bottom: 1.5rem;
      border-bottom: 2px solid #f0f0f0;
      padding-bottom: 0.5rem;
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }

    .tech-card {
      padding: 1.5rem;
      border-radius: 10px;
      background: #f8f9fa;
      text-align: center;
      transition: transform 0.3s ease;
    }

    .tech-card:hover {
      transform: translateY(-5px);
    }

    .tech-card i {
      font-size: 3rem;
      color: #3498db;
      margin-bottom: 1rem;
    }

    .tech-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .features-list {
      list-style: none;
      padding: 0;
    }

    .features-list li {
      padding: 0.5rem 0;
      position: relative;
      padding-left: 1.5rem;
    }

    .features-list li::before {
      content: "→";
      position: absolute;
      left: 0;
      color: #3498db;
    }

    .architecture-section ul {
      list-style: none;
      padding-left: 1.5rem;
    }

    .architecture-section li {
      margin: 0.5rem 0;
      position: relative;
    }

    .architecture-section li::before {
      content: "•";
      color: #3498db;
      position: absolute;
      left: -1rem;
    }

    @media (max-width: 768px) {
      .about-container {
        padding: 1rem;
      }

      .tech-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AboutComponent {}