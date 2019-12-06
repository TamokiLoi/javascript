import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class RouteChildGuard {
    // path: ActivatedRouteSnapshot[];
    // route: ActivatedRouteSnapshot;

    // private permission: Array<any> = [];

    // constructor(private router: Router,
    //     private permissionService: PermissionService) {
    //     this.permission = this.permissionService.permissionList['common'];
    // }

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    //     const routePermission = route.data.permission;
    //     const boolPermission = this.permission.indexOf(routePermission);

    //     if (boolPermission === -1) {
    //         this.router.navigate(['/deny']);
    //         return false;
    //     }

    //     return true;
    // }
}