import { APIConfig, HttpClientService } from 'src/app/common';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterDataTypeService {

    constructor(
        private URL: APIConfig,
        private http: HttpClientService,
    ) { }

    getList(params) {
        return this.http.get(this.URL.API_BASE + '/master-data-type/search' + params);
    }

    create(params) {
        return this.http.post(this.URL.API_BASE + '/master-data-type/create', params);
    }

    getDetail(id) {
        return this.http.get(this.URL.API_BASE + '/master-data-type/detail/' + id);
    }

    update(id, params) {
        return this.http.put(this.URL.API_BASE + '/master-data-type/update/' + id, params);
    }

    delete(id) {
        return this.http.delete(this.URL.API_BASE + '/master-data-type/delete/' + id);
    }

    getDropdown(params = '') {
        return this.http.get(this.URL.API_BASE + '/master-data-type/dropdown' + params);
    }

}
