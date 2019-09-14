import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


// The principal router calls the main routes from the app.
// Then the submodules Routers (like: ./dashboard/dashboard-routing.module.ts)
// will take on themselves the rest of the routes of the app
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: PageNotFoundComponent } // Any non-catched route 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
