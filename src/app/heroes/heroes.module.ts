import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

import { HeroesRoutingModule } from '../routes/heroes-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './service/hero.service';

@NgModule({
  // default module class that you need to inherit in components attached
  imports: [
    CommonModule,
    FormsModule,
    MatTabsModule,
    HeroesRoutingModule
  ],
  declarations: [
    HeroesComponent,
    HeroDetailComponent
  ],
  // Providers are the services to use with components attached
  providers: [HeroService]
})
export class HeroesModule {}
