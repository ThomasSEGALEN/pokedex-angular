import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../pokemon-list';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule, PokemonTypeColorPipe],
  templateUrl: './pokemon-details.component.html',
})
export class PokemonDetailsComponent implements OnInit {
  pokemons: Array<Pokemon>;
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.pokemons = POKEMONS;
    const pokemonId: string | null = this.route.snapshot.paramMap.get('id');

    if (pokemonId) {
      this.pokemon = this.pokemons.find(pokemon => pokemon.id === parseInt(pokemonId));
    }
  }

  goToPokemonList(): void {
    this.router.navigate(['/pokemons']);
  }
}
