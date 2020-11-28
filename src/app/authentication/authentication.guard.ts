import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  
  constructor(private authSrv:AuthenticationService, private router:Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      // Return true if logged in 
      if (this.authSrv.isLoggedIn()) {
        console.log('> The user is logged in. AuthGuard will return true');
        
        return true
      }

      console.log('> The user is not logged in. Show the login page');
      this.router.navigateByUrl("/authentication")
      return false
  }
  
}
