import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon';

interface PokemonListResponse {
  count: number;
  results: {
    name: string;
    url: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';
  private totalPokemons = 1008;

  constructor(private http: HttpClient) { }

  private getRandomIds(count: number): number[] {
    const ids: number[] = [];
    while (ids.length < count) {
      const randomId = Math.floor(Math.random() * this.totalPokemons) + 1;
      if (!ids.includes(randomId)) {
        ids.push(randomId);
      }
    }
    return ids;
  }

  getPokemons(): Observable<Pokemon[]> {
    const randomIds = this.getRandomIds(10);
    const pokemonRequests = randomIds.map(id => 
      this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${id}`)
    );
    return forkJoin(pokemonRequests);
  }

  searchPokemon(searchTerm: string): Observable<Pokemon | null> {
    return this.http.get<Pokemon>(`${this.baseUrl}/pokemon/${searchTerm.toLowerCase()}`).pipe(
      catchError(() => of(null))
    );
  }
}