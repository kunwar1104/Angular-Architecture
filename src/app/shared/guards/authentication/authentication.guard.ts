import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  
  localStorage : string |any  ;

  constructor ( private route :Router) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.localStorage = localStorage.getItem("token") 

    if(  this.localStorage === null) {
      console.log(localStorage.getItem("token"));
      this.route.navigate(['/login']);
      
      return false;
    }
    return true;

  }
  
}
