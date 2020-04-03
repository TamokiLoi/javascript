import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIConfig } from '../components/layout/config';

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

    loginFake(params) {
        const res = {
            data: {
                token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hdXRoLmNvbW1vbi50YWxyb24ucWMuc2VsZGF0ZGlyZWN0LmNvbVwvdXNlcnNcL2xvZ2luIiwiaWF0IjoxNTcwMTY1NzUzLCJleHAiOjE1NzUzNDk3NTMsIm5iZiI6MTU3MDE2NTc1MywianRpIjoxLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJuYW1lIjoiU3lzdGVtICBBZG1pbiIsInVzZXJuYW1lIjoiYWRtaW4ifQ.ssQE2sYM2KAymV8L7UAovRQd_gnLICcDsA4RWpO68Cs'
            }
        }
        return res;
    }

    login(credentials): Observable<any> {
        return this.httpClient.post(this.URL.LOGIN, credentials);
    }

    testAPI() {
        return this.httpClient.get('http://jsonplaceholder.typicode.com/posts');
    }
}
