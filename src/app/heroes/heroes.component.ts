import { Component, OnInit } from '@angular/core';

import { Hero } from './interfaces/hero';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() { }

  private onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
