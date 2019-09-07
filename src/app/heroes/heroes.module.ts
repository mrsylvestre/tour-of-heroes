import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './routes/heroes-routing.module';
import { HeroService } from './services/hero.service';

@NgModule({
  // default module class that you need to inherit in components attached
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule,
    MatTabsModule
  ],
  declarations: [
    HeroesComponent,
    HeroDetailComponent
  ],
  // Providers are the services to use with components attached
  providers: [HeroService]
})
export class HeroesModule {}
