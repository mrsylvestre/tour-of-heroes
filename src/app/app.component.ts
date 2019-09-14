import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { AppService } from './app.service';

interface MenuOpt {
  id: number;
  displayName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  menuOptions: MenuOpt[] = [{ id: 1, displayName: 'Dashboard'}, { id: 2, displayName: 'Heroes'}];
  selectedMenuOpt: MenuOpt;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    // TODO: this subcription fires twice when naviguation to heroes,
    this.router.events.subscribe((val: NavigationEnd) => {
      if (val instanceof NavigationEnd) {
        this.menuOptions.forEach(opt => {
          if (val.url.includes(opt.displayName.toLowerCase())) {
            this.selectedMenuOpt = opt;
            console.log('menu option to set active', opt);
          }
        });
      }
    });
  }

  setTitle(newTitle: string) {
    this.appService.setTitle(newTitle);
  }

  setMenu(opt: MenuOpt) {
    if (opt !== this.selectedMenuOpt) {
      this.selectedMenuOpt = opt;
      this.routeTo(opt);
    }
  }

  routeTo(opt: MenuOpt): void {
    const link = [opt.displayName.toLowerCase()];
    this.router.navigate(link);
  }

}
