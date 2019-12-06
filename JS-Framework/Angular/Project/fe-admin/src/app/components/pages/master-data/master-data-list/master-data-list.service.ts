import { HttpClientService, APIConfig } from 'src/app/common';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MasterDataListService {

    constructor(
        private URL: APIConfig,
        private http: HttpClientService,
    ) { }

    getList(params) {
        return this.http.get(this.URL.API_BASE + '/master-data/search' + params);
    }

    create(params) {
        return this.http.post(this.URL.API_BASE + '/master-data/create', params);
    }

    getDetail(params) {
        return this.http.get(this.URL.API_BASE + '/master-data/detail/' + params['md_type'] +
            '/' + params['md_code']);
    }

    update(md_code, params) {
        return this.http.put(this.URL.API_BASE + '/master-data/update/' + md_code, params);
    }

    delete(id) {
        return this.http.delete(this.URL.API_BASE + '/master-data/delete/' + id);
    }
}
