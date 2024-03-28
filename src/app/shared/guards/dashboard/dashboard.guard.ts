import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {

  constructor ( private route :Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        if(localStorage.getItem("token")) {
          
          console.log("Dashboard Token ",localStorage.getItem("token"));
      
      return true;
    } 
    else{
        this.route.navigate(['/login']);
      return false;
    }
  }
  
}
