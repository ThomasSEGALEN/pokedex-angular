import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonBorderCardDirective } from './pokemon-border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent
  },
  {
    path: ':id',
    component: PokemonDetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    PokemonListComponent,
    PokemonDetailsComponent,
    PokemonBorderCardDirective,
    PokemonTypeColorPipe,
    RouterModule.forChild(routes)
  ]
})

export class PokemonModule { }
