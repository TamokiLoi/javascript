import { UserInfo } from 'src/app/common/model';
import { FormatService } from 'src/app/common/services';
import { TranslateService } from 'src/app/common/translate/translate.service';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header-inner',
    templateUrl: './header-inner.component.html',
    styleUrls: ['./header-inner.component.scss'],
    providers: [TranslateService]
})
export class HeaderInnerComponent implements OnInit {

    userInfo: UserInfo;
    flagLang: boolean = true;
    lang = this.translateService._currentLang;

    constructor(
        private translateService: TranslateService,
        private formatService: FormatService,
    ) {
        this.userInfo = JSON.parse(localStorage.getItem('user_info'));
    }

    ngOnInit() { 
        this.checkLang(this.lang);
    }

    onChange(lang) {
        this.checkLang(lang);
        this.translateService.refreshLang(lang);
    }

    checkLang(lang) {
        this.flagLang = true;
        if (lang == 'EN') {
            this.flagLang = !this.flagLang;
        }
        this.lang = lang;
    }

    logout() {
        localStorage.clear();
        localStorage.setItem('lang', this.lang);
        this.formatService.redirectToListFormat(null, '/login');
    }
}
