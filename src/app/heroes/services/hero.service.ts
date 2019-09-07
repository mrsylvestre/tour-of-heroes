import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../interfaces/hero';
import { HEROES } from '../mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}