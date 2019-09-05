import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './routes/heroes-routing.module';
@NgModule({
  // default module class that you need to inherit in components attached
  imports: [
    CommonModule,
    HeroesRoutingModule,
  ],
  declarations: [
    HeroesComponent
  ],
  // Providers are the services to use with components attached
  providers: []
})
export class HeroesModule {}
