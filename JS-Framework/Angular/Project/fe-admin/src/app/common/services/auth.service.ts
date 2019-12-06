import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { APIConfig } from '../api-config';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    language: string;

    private httpOptions: any;

    constructor(
        private URL: APIConfig,
        private httpClient: HttpClient
    ) {
        this.language = localStorage.getItem('lang');
        this.httpOptions = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer null',
            'accept-language': this.language
        });
    }

    login(params): Observable<any> {
        return this.httpClient.post(this.URL.LOGIN, params);
    }
}
