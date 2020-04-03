import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'category-cru',
    templateUrl: './category-cru.component.html',
    styleUrls: ['./category-cru.component.scss']
})
export class CategoryCruComponent implements OnInit {

    id;

    constructor(
        private activeRoute: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        // console.log(this.activeRoute)
        // if(this.activeRoute.snapshot.params['id']) {
        //     // this.id = this.activeRoute.snapshot.params['id']
        // }
        // // console.log(this.router)
        // this.activeRoute.params.subscribe( params =>
        //     // console.log(params)
        // )
    }

}
