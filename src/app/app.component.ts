import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, Scroll } from '@angular/router';
import { debounceTime, tap } from 'rxjs/operators';

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
    this.router.events.pipe(tap(), debounceTime(0)).subscribe((val: Scroll) => {
      const evt = val.routerEvent;
      if (evt instanceof NavigationEnd) {
        this.menuOptions.forEach(opt => {
          const substring = opt.displayName.toLowerCase();
          if (evt.url.includes(substring)) {
            this.selectedMenuOpt = opt;
            this.setTitle(opt.displayName);
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
