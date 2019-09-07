import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from '../heroes/heroes.component';

// Pokemons module route's
const heroesRoutes: Routes = [
  {
    path: 'heroes',
    // canActivate: [AuthGuard], // maybe put a guard in there for good mesure later
    children: [
      { path: '', component: HeroesComponent },
      // { path: 'all', component: ListPokemonsComponent },
      // { path: 'edit/:id', component: EditPokemonComponent },
      // { path: ':id', component: DetailPokemonComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(heroesRoutes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {}
