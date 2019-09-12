import { Component, Input, OnChanges } from '@angular/core';

import { Hero } from '../interfaces/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnChanges {
  @Input() hero: Hero;

  public editing = false;

  constructor() { }

  ngOnChanges(): void {
    this.editing = false;
  }

  changeHeroName(newName: string ) {
    if (newName.trim().length > 0) {
      this.hero.name = newName;
    }
  }

  toggleEdit() {
    return this.editing ? this.editing = false : this.editing = true;
  }
}
