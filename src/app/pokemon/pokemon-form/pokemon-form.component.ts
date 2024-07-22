import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [CommonModule, FormsModule, PokemonTypeColorPipe],
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})

export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: Array<string>;
  isCreateForm: boolean;

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypes();
    this.isCreateForm = this.router.url.includes('create');
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const checked = ($event.target as HTMLInputElement).checked;

    if (checked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypeValid(type: string): boolean {
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }

    if (this.pokemon.types.length >= 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  onSubmit() {
    if (this.isCreateForm) {
      this.pokemonService.createPokemon(this.pokemon)
        .subscribe((pokemon: Pokemon) => this.router.navigate(['/pokemons', pokemon.id]));
    } else {
      this.pokemonService.updatePokemon(this.pokemon)
        .subscribe(() => this.router.navigate(['/pokemons', this.pokemon.id]));
    }
  }
}
