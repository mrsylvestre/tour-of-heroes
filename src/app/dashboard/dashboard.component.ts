import { CdkTable, DataSource } from '@angular/cdk/table';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Hero } from '../heroes/interfaces/hero';
import { HeroService } from '../heroes/service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @ViewChild('table', {static: false}) table: CdkTable<any>;

  // To refrain unwanted columns to display, just remove any entry in the displayedColumns array
  // TODO: Consider plucking those column defs from an observable stream which would be mapped to the received data keys
  displayedColumns: string[] = ['id', 'name', 'pv', 'dmg', 'mana'];
  // tslint:disable-next-line: no-use-before-declare
  dataSource$ = new HeroDataSource(this.heroService.getHeroes());

  constructor(private heroService: HeroService, private router: Router) { }

  routeTo(hero: Hero): void {
    const link = ['/heroes', hero.name.toLowerCase()];
    this.router.navigate(link);
  }

}

export class HeroDataSource extends DataSource<any[]> {

  private data: Observable<any[]>;

  constructor(internData: Observable<Hero[]>) {
    super();
    this.data = internData;
  }

  connect(): Observable<any[]> { return this.data; }

  disconnect(): void { }
}
