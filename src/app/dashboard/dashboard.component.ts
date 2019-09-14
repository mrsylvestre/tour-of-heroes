import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Hero } from '../heroes/interfaces/hero';
import { HeroService } from '../heroes/service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {

  displayedColumns: any[];
  heroes$: Observable<Hero[]> = this.heroService.getHeroes().pipe(tap(heroes => {
    this.displayedColumns = Object.keys(heroes[0]);
  }));

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit() { }

  routeTo(hero: Hero): void {
    const link = ['/heroes', hero.name.toLowerCase()];
    this.router.navigate(link);
  }

}
