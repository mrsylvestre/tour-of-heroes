import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { Hero } from './interfaces/hero';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  selectedHero: Hero;

  constructor(
    private documentTitleService: Title,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  private onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.documentTitleService.setTitle(`Modern Heroes - ${hero.name}`);
  }

  private getHeroes(): void {
    this.heroes$ = this.heroService.getHeroes();
  }

}
