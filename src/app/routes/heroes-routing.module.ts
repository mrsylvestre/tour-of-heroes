import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from '../heroes/heroes.component';

// Pokemons module route's
const heroesRoutes: Routes = [
  {
    path: 'heroes', component: HeroesComponent,
    // canActivate: [AuthGuard], // maybe put a guard in there for good mesure later
    children: [
      { path: ':id', component: HeroesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(heroesRoutes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {}
