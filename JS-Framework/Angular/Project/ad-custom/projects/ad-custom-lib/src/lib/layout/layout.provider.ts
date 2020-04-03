import { InjectionToken } from '@angular/core';

import { LayoutState } from './layout.state';
import { LayoutStore } from './layout.store';

/**
 * [InjectionToken description]
 */
export const LayoutConfigToken = new InjectionToken('layoutConfig');

/**
 * [layoutStoreFactory description]
 */
export function layoutStoreFactory(layoutConfig: LayoutState): LayoutStore {
    return new LayoutStore(layoutConfig);
}

/**
 * [layoutProviders description]
 */
export function layoutProvider(layoutConfig: LayoutState) {
    return [{
        provide: LayoutStore,
        useFactory: layoutStoreFactory,
        deps: [LayoutConfigToken]
    }, {
        provide: LayoutConfigToken,
        useValue: layoutConfig
    }
    ];
}
