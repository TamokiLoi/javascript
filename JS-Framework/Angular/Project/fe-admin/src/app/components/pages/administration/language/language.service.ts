import { Injectable } from '@angular/core';
import { APIConfig, HttpClientService } from 'src/app/common';

@Injectable({
    providedIn: 'root'
})
export class LanguageAdminService {

    constructor(
        private URL: APIConfig,
        private http: HttpClientService,
    ) { }

    getList(params) {
        return this.http.get(this.URL.API_BASE + '/language/search' + params);
    }

    create(params) {
        return this.http.post(this.URL.API_BASE + '/language/create', params);
    }

    update(id, params) {
        return this.http.put(this.URL.API_BASE + '/language/update/' + id, params);
    }

    delete(id) {
        return this.http.delete(this.URL.API_BASE + '/language/delete/' + id);
    }
}
