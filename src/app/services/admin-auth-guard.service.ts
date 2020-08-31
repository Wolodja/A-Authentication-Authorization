import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router, private authSerrvice: AuthService) { }


  canActivate() {
    let user = this.authSerrvice.currentUser;
    if (user && user.admin) return true;

    this.router.navigate(['/no-access']);
    return false;
  }

}
