import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { HttpClientService } from './common';
import { TranslateService } from './common/translate/translate.service';
import { LayoutService } from './components/template/adminlte-custom';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

    customLayout: boolean;
    loading: boolean = false;

    constructor(
        private layoutService: LayoutService,
        private cd: ChangeDetectorRef,
        private httpService: HttpClientService,
        private translateService: TranslateService,
    ) {
        this.layoutService.isCustomLayout.subscribe((value: boolean) => {
            this.customLayout = value;
        });
    }

    ngOnInit() {
        // event loading when call api
        this.httpService.onLoading.subscribe((value: boolean) => {
            this.loading = value;
            this.cd.detectChanges();
        })

        // init language
        this.httpService.onGetLanguage.subscribe((value: boolean) => {
            if(value) {
                this.httpService.onGetLanguage.next(false);
                this.translateService.refreshLang();
            }
        })
    }
}
