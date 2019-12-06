import { Injectable } from '@angular/core';

import { APIConfig } from '../api-config';
import { HttpClientService } from '../http.client';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor(
        private URL: APIConfig,
        private http: HttpClientService,
    ) { }

    // get status
    getStatus() {
        return this.http.get(this.URL.API_BASE + '/common/status');
    }
    
    // get master-data by type
    getMasterData(type) {
        return this.http.get(this.URL.API_BASE + '/master-data/dropdown/' + type);
    }
}
