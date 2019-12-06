import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { MessageHandlerService } from './services/message-handler.service';

@Injectable()
export class HttpClientService {

    public onLoading: BehaviorSubject<any> = new BehaviorSubject(undefined);
    public onGetLanguage: BehaviorSubject<any> = new BehaviorSubject(undefined);

    language: string;

    private httpOptions: any;

    constructor(
        public httpClient: HttpClient,
        private router: Router,
        private toastService: MessageHandlerService,
    ) {
        this.language = localStorage.getItem('lang');
    }

    private headerOptionDefault(params?) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('id_token'),
                // 'Accept-Language': this.language
            })
        };

        if (params) {
            httpOptions['params'] = params;
        }
        return httpOptions;
    }

    public get(url, params?: any) {
        this.showLoading();
        return this.httpClient.get(url, this.headerOptionDefault(params)).pipe(
            catchError(this.handleError),
            map(this.extractData)
        );
    }

    public post(url, data?: any) {
        this.showLoading();
        return this.httpClient.post(url, data, this.headerOptionDefault()).pipe(
            catchError(this.handleError),
            map(this.extractData)
        );
    }

    public put(url, data?: any) {
        this.showLoading();
        return this.httpClient.put(url, data, this.headerOptionDefault()).pipe(
            catchError(this.handleError),
            map(this.extractData)
        );
    }

    public delete(url) {
        this.showLoading();
        return this.httpClient.delete(url, this.headerOptionDefault()).pipe(
            catchError(this.handleError),
            map(this.extractData)
        );
    }

    // handle show loading when call API
    private showLoading() {
        this.onLoading.next(true);
    }

    // handle remove loading when end call API
    private extractData = (res: any) => {
        this.onLoading.next(false);
        return res;
    }

    // handle show message error
    private handleError = (err: HttpErrorResponse) => {
        if (!window.localStorage.getItem('id_token')) {
            this.router.navigate(['/login']);
        } else {
            if (err.status === 401 || err.status === 0) {
                this.router.navigate(['/login']);
            }
        }

        const dataError = err.error;

        if (dataError && dataError.message) {
            this.toastService.infoToastMessage(this.toastService.ERROR, dataError.message);
        } else if (dataError && dataError.data && dataError.data.msg) {
            this.toastService.infoToastMessage(this.toastService.ERROR, dataError.data.msg);
        } else if (dataError && dataError.error) {
            this.toastService.infoToastMessage(this.toastService.ERROR, dataError.error.message);
        } else {
            const message = dataError.errors[Object.keys(dataError.errors)[0]]
            this.toastService.infoToastMessage(this.toastService.ERROR, message);
        }

        this.onLoading.next(false);
        return throwError(err);
    }
}