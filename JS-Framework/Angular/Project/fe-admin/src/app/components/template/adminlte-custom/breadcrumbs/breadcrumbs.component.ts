import { Subscription } from 'rxjs';

import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RoutingService } from '../service/routing.service';

@Component({
    selector: 'mk-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

    public breadcrumbs;

    private subscription: Subscription;

    @Input() public homeIcon = 'fa fa-home';

    /**
     * @method constructor
     * @param routingService [description]
     * @param changeDetectorRef [description]
     */
    constructor(
        private routingService: RoutingService,
        private changeDetectorRef: ChangeDetectorRef,
        private router: Router,
    ) { }

    /**
     * @method ngOnInit
     */
    ngOnInit() {
        this.subscription = this.routingService.onChange.subscribe(value => {
            this.breadcrumbs = value;
        });
    }

    /**
     * @method ngOnDestroy
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
