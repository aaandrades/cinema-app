import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { take } from 'rxjs/operators';
import { UserFacade } from '../store/facade/user.facade';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private userFacade: UserFacade, private router: Router) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const user = await this.userFacade.user$.pipe(take(1)).toPromise();
    return user.token === '' ? this.router.createUrlTree(['/login']) : true;
  }
}
