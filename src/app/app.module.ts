import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesModule } from './heroes/heroes.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  imports: [
    HeroesModule, // The HeroesModule needs to be called first so his routes are first to be looked at
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
