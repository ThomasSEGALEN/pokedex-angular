import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="center">
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png" alt="Pokemon not found" />
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/" class="waves-effect waves-teal btn-flat">
        Retourner à l'accueil
      </a>
    </div>
  `
})
export class PageNotFoundComponent { }
