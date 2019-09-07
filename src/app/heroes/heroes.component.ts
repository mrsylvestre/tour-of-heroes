import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

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

  constructor(private pageTitleService: Title) { }

  ngOnInit() { }

  private onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.pageTitleService.setTitle(`Modern Heroes - ${hero.name}`);
  }

}
