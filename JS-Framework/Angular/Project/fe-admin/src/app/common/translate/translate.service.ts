import { Injectable } from '@angular/core';

import { APIConfig } from '../api-config';
import { HttpClientService } from '../http.client';

@Injectable({
    providedIn: 'root'
})
export class TranslateService {

    _currentLang: any;
    _translations = {};

    constructor(
        private URL: APIConfig,
        private http: HttpClientService,
    ) {
        this.setCurrentLang();
    }

    instant(key: string) {
        // call translation
        return this.translate(key);
    }

    private translate(key: string): string {
        // private perform translation
        const translation = key;
        if (localStorage.getItem('language')) {
            this._translations = JSON.parse(localStorage.getItem('language'));
        }

        if (this._translations && this._translations[key]) {
            return this._translations[key];
        }

        return translation;
    }

    refreshLang(lang = null) {
        this.getLanguage(lang);
    }

    // get language
    getLanguage(lang = null) {
        (lang !== null) ? lang : lang = this.setCurrentLang();
        return this.http.get(this.URL.API_BASE + '/language/all-messages?language=' + lang)
            .subscribe((res) => {
                localStorage.setItem('lang', lang);
                localStorage.setItem('language', JSON.stringify(res.data));
                this._translations = res.data;
            });
    }

    // set current language
    setCurrentLang() {
        this._currentLang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'VN';
        return this._currentLang;
    }
}
