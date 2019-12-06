import { HttpClientService } from 'src/app/common';
import { APIConfig } from 'src/app/common/api-config';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private URL: APIConfig,
        private http: HttpClientService,
    ) { }

    getList(params) {
        return this.http.get(this.URL.API_BASE + '/users/search' + params);
    }

    create(params) {
        return this.http.post(this.URL.API_BASE + '/users/create', params);
    }

    getDetail(id) {
        return this.http.get(this.URL.API_BASE + '/users/detail/' + id);
    }

    update(id, params) {
        return this.http.put(this.URL.API_BASE + '/users/update/' + id, params);
    }

    delete(id) {
        return this.http.delete(this.URL.API_BASE + '/users/delete/' + id);
    }
}
