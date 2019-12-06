import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    public onVisible: BehaviorSubject<any> = new BehaviorSubject(undefined);

    constructor() { }

    // check visible to disabled header and siderbar-left
    checkVisible(visible) {
        if (visible) {
            this.onVisible.next(true);
        } else {
            this.onVisible.next(false);
        }
    }
}
