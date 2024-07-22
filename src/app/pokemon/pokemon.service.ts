import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Pokemon } from './pokemon';
import { POKEMONS } from './pokemon-list';

@Injectable()

export class PokemonService {
  constructor(private http: HttpClient) { }

  private log(response: any): void {
    console.table(response);
  }

  private handleError(error: Error, errorValue: any): Observable<any> {
    console.error(error);
    return of(errorValue);
  }

  getPokemons(): Observable<Array<Pokemon>> {
    return this.http.get<Array<Pokemon>>('/api/pokemons').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonById(id: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`/api/pokemons/${id}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  createPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Pokemon>('/api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, pokemon))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put('/api/pokemons', pokemon, httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  deletePokemonById(id: number): Observable<null> {
    return this.http.delete(`/api/pokemons/${id}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );
  }

  getPokemonTypes(): Array<string> {
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy', 'Sol', 'Roche', 'Spectre', 'Acier', 'Dragon', 'Ténèbres', 'Glace'];
  }
}
