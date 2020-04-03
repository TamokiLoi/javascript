import { Injectable } from '@angular/core';
import { APIConfig } from '../layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

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

    getList() {
        return this.httpClient.get('http://jsonplaceholder.typicode.com/posts');
    }
}
