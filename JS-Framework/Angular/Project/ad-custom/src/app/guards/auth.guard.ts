import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuard implements CanActivate {
    public jwtHelper = new JwtHelperService();
    constructor(
        private router: Router
    ) { }

    public canActivate() {
        if (this.loggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

    public loggedIn() {
        return !this.jwtHelper.isTokenExpired(localStorage.getItem('id_token'));
    }
}

@Injectable()
export class RouteGuard {
    // private permission: Array<any> = [];

    // constructor(
    //     private router: Router,
    //     private permissionService: PermissionService) {
    //     this.permission = this.permissionService.permissionList['common'];
    // }

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    //     let countBoolPermission = 0;
    //     const routePermission = route.data.permission;

    //     routePermission.forEach((per) => {
    //         const boolPermission = this.permission.indexOf(per);

    //         if (boolPermission === -1) {
    //             countBoolPermission++;
    //         }
    //     });

    //     if (countBoolPermission === routePermission.length) {
    //         this.router.navigate(['/deny']);
    //         return false;
    //     }

    //     return true;
    // }

    // canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    //     const routePermission = route.data.permission;
    //     const boolPermission = this.permission.indexOf(routePermission);

    //     if (boolPermission === -1) {
    //         this.router.navigate(['/deny']);
    //         return false;
    //     }

    //     return true;
    // }
}