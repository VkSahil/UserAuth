import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AutheGuard implements CanActivate {
 constructor(private auth:AuthService, private route:Router){}

 // Checking User is Checking is Logged In Or Not
 canActivate():boolean {
  if(this.auth.isLoggedIn()){
    return true;
  }
  else{
    this.route.navigate(['login']);
    return false;
  }
 }

}
