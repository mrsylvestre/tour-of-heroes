import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

import { Hero } from '../interfaces/hero';
import { HEROES } from '../mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private snackbarService: SnackbarService) { }

  getHero(id: number): Observable<Hero> {
    // this.snackbarService.display(`Fetched ${HEROES[id].name}`);
    return of(HEROES[id]);
  }

  getHeroes(): Observable<Hero[]> {
    // this.snackbarService.display('Fetched Heroes');
    return of(HEROES);
  }
}
