import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Hero } from './interfaces/hero';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    if (hero !== this.selectedHero) {
      this.selectedHero = hero;
      this.routeTo(hero);
    }
  }

  routeTo(hero: Hero): void {
    const link = ['/heroes', hero.id];
    this.router.navigate(link);
  }

  getHeroes(): void {
    this.heroes$ = this.heroService.getHeroes().pipe(
      tap((heroes) => {
        if (!this.selectedHero) {
          this.selectedHero = heroes[0];
          this.routeTo(this.selectedHero);
        }
      }
    ));
  }

}
