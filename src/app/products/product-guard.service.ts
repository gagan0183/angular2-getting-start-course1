import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private _route: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = +route.url[1].path;
    if (isNaN(id) || id < 0) {
      alert('Invalid id');
      this._route.navigate(['/products']);
      return false;
    }
    return true;
  }
}
