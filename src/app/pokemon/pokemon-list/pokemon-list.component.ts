import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonBorderCardDirective } from '../pokemon-border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, RouterLink, PokemonBorderCardDirective, PokemonTypeColorPipe],
  templateUrl: './pokemon-list.component.html',
})

export class PokemonListComponent implements OnInit {
  pokemons: Array<Pokemon>;

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonService
      .getPokemons()
      .subscribe((pokemons) => this.pokemons = pokemons);
  }

  goToPokemonDetails(pokemonId: string): void {
    this.router.navigate(['/pokemons', pokemonId]);
  }
}
