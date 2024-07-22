import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";

@Component({
  selector: 'app-pokemon-edit',
  standalone: true,
  imports: [CommonModule, PokemonFormComponent],
  template: `
    <h2 class="center">Éditer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture" [alt]="pokemon.name" />
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `
})

export class PokemonEditComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
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
}
