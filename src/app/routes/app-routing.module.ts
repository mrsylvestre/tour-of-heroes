import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

// The principal router calls the main routes from the app.
// Then the submodules Routers (like: ./heroes/heroes-routing.module.ts)
// will take on themselves the rest of the routes of the app
const routes: Routes = [
  { path: '', redirectTo: 'heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent } // Any non-catched route 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
