import { Injectable } from '@angular/core';

export interface NavItem {
  displayName: string;
  route: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }

  getNavItems(): NavItem[] {
    return [
      { displayName: 'Home', route: '/home' },
      { displayName: 'Basic', route: '/basic' },
      { displayName: 'Colors', route: '/colors' },
      { displayName: 'Side Nav', route: '/side-nav' },
    ];
  }
}
