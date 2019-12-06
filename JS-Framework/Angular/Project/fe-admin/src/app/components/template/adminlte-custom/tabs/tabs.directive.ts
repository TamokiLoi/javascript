import { Directive, ElementRef, Input } from '@angular/core';

/*
 *
 */
@Directive({
    selector: '[mkTabToggle]'
})
export class TabToggleDirective {
    @Input('mkTabToggle') tabComponent;

    /**
     * @method constructor
     * @param elementRef [description]
     */
    constructor(
        public elementRef: ElementRef
    ) { }
}
