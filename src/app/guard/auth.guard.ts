import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }


    canActivate(route: ActivatedRouteSnapshot) {
        if (route==null) return false;

        const token = localStorage.getItem('token');
        console.log(token);
        if(token) {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}