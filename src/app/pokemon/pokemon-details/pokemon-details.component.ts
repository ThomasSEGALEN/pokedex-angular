import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule, PokemonTypeColorPipe],
  templateUrl: './pokemon-details.component.html',
})

export class PokemonDetailsComponent implements OnInit {
  pokemons: Array<Pokemon>;
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if (pokemonId) {
      this.pokemonService
        .getPokemonById(parseInt(pokemonId))
        .subscribe((pokemon) => this.pokemon = pokemon);
    }
  }

  deletePokemon(pokemon: Pokemon): void {
    this.pokemonService
      .deletePokemonById(pokemon.id)
      .subscribe(() => this.goToPokemonList());
  }

  goToPokemonList(): void {
    this.router.navigate(['/pokemons']);
  }

  goToEditPokemon(pokemon: Pokemon): void {
    this.router.navigate(['/pokemons', pokemon.id, 'edit']);
  }
}
