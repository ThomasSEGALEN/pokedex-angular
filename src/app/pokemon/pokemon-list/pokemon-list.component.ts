import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PokemonBorderCardDirective } from '../pokemon-border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../pokemon-list';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, PokemonBorderCardDirective, PokemonTypeColorPipe],
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent {
  pokemons: Array<Pokemon> = POKEMONS;
  selectedPokemon: Pokemon | undefined;

  constructor(private router: Router) { }

  goToPokemonDetails(pokemonId: string): void {
    this.router.navigate(['/pokemons', pokemonId]);
  }
}
