import { Injectable } from '@angular/core';

import { MessageService } from '../../components/template/prime-custom/common/api';

@Injectable({
    providedIn: 'root'
})
export class MessageHandlerService {

    SUCCESS = 'success';
    INFO = 'info';
    WARNING = 'warn';
    ERROR = 'error';

    constructor(
        private messageService: MessageService,
    ) { }

    infoToastMessage(severity, detail, life = 5000, summary = '') {
        if (summary == '') {
            switch (severity) {
                case this.SUCCESS:
                    summary = 'Success Message';
                    break;
                case this.INFO:
                    summary = 'Info Message';
                    break;
                case this.WARNING:
                    summary = 'Warn Message';
                    break;
                case this.ERROR:
                    summary = 'Error Message';
                    break;
            }
        }
        this.messageService.add({ severity: severity, summary: summary, detail: detail, life: life });
    }
}
