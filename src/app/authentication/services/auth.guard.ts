import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(private authService:TokenStorageService, private route:Router){}
  canActivateChild():boolean {
    if (this.authService.getToken()) {
      return true;
    } else {
      
      this.route.navigate(['/authentication/login']);
      return false
    }
  }

  
}
