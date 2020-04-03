import { Component } from '@angular/core';
import { LayoutService } from 'ad-custom-lib';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public customLayout: boolean;

    constructor(
        private layoutService: LayoutService
    ) { }

    ngOnInit() {
        this.layoutService.isCustomLayout.subscribe((value: boolean) => {
            this.customLayout = value;
        });
        // console.log(this.customLayout)
    }
}
