import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { PokemonCreateComponent } from './pokemon-create/pokemon-create.component';
import { PokemonEditComponent } from './pokemon-edit/pokemon-edit.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonBorderCardDirective } from './pokemon-border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

const routes: Routes = [
  {
    path: ':id/edit',
    component: PokemonEditComponent
  },
  {
    path: 'create',
    component: PokemonCreateComponent
  },
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
    FormsModule,
    PokemonListComponent,
    PokemonDetailsComponent,
    PokemonBorderCardDirective,
    PokemonTypeColorPipe,
    RouterModule.forChild(routes)
  ],
  providers: [PokemonService]
})

export class PokemonModule { }
