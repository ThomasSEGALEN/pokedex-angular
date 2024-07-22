import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonFormComponent } from "../pokemon-form/pokemon-form.component";
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-create',
  standalone: true,
  imports: [CommonModule, PokemonFormComponent],
  template: `
    <h2 class="center">Ajouter un Pokémon</h2>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `
})
export class PokemonCreateComponent implements OnInit {
  pokemon: Pokemon;

  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }
}
