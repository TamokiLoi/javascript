import { Injectable, ElementRef } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {

    public elementRef: ElementRef;

    /**
     * [offsetHeight description]
     * @method offsetHeight
     * @return [description]
     */
    public get offsetHeight(): number {
        return this.elementRef ? this.elementRef.nativeElement.offsetHeight : 0;
    }
}
