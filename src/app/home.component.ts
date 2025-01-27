import { Component } from '@angular/core';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskManagerComponent, PokemonListComponent],
  template: `
    <app-task-manager></app-task-manager>
    <app-pokemon-list></app-pokemon-list>
  `
})
export class HomeComponent {}