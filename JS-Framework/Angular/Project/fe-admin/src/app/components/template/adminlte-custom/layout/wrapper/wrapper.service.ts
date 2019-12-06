import { Injectable, ElementRef } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WrapperService {
    public wrapperElementRef: ElementRef;
}
