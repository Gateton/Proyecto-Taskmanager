import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  loading: boolean = false;
  error: string | null = null;
  searchTerm: string = '';
  searching: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons() {
    this.loading = true;
    this.error = null;
    this.pokemons = [];

    this.pokemonService.getPokemons().subscribe({
      next: (data) => {
        this.pokemons = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching pokemon:', error);
        this.error = 'Error al cargar los Pokémon. Por favor, intenta de nuevo.';
        this.loading = false;
      }
    });
  }

  searchPokemon() {
    if (!this.searchTerm.trim()) return;

    this.searching = true;
    this.error = null;

    this.pokemonService.searchPokemon(this.searchTerm).subscribe({
      next: (pokemon) => {
        if (pokemon) {
          this.pokemons = [pokemon];
        } else {
          this.error = `No se encontró ningún Pokémon con el nombre o ID: ${this.searchTerm}`;
          this.pokemons = [];
        }
        this.searching = false;
      },
      error: (error) => {
        console.error('Error searching pokemon:', error);
        this.error = 'Error al buscar el Pokémon. Por favor, intenta de nuevo.';
        this.searching = false;
      }
    });
  }

  refreshList() {
    this.searchTerm = '';
    this.loadPokemons();
  }
}