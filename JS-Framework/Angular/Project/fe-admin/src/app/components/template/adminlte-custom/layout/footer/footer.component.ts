import { Component, ContentChild, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { FooterService } from './footer.service';

/**
 * Footer Left
 */
@Component({
    selector: 'mk-layout-footer-left',
    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
})
export class FooterLeftComponent {
    @ViewChild('templateRef', { static: true }) public templateRef: TemplateRef<any>;
}

/**
 * Footer Right
 */
@Component({
    selector: 'mk-layout-footer-right',
    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
})
export class FooterRightComponent {
    @ViewChild('templateRef', { static: true }) public templateRef: TemplateRef<any>;
}

/**
 * Footer
 */
@Component({
    selector: 'mk-layout-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    @ContentChild(FooterLeftComponent, { static: true }) public footerLeftComponent: FooterLeftComponent;
    @ContentChild(FooterRightComponent, { static: true }) public footerRightComponent: FooterRightComponent;

    constructor(
        private elementRef: ElementRef,
        private footerService: FooterService
    ) { }

    ngOnInit() {
        this.footerService.elementRef = this.elementRef;
    }

}
