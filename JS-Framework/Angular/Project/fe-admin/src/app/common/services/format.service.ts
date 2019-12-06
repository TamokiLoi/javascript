import { LazyLoadEvent } from 'primeng/api';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { MessageHandlerService } from './message-handler.service';
import { DatePipe } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class FormatService {

    constructor(
        private toastService: MessageHandlerService,
        private router: Router,
    ) { }

    // format titlePage and disabled by action
    actionFormat(action, titlePageData) {
        let body = {
            action: action,
            title_page: '',
            disabled: false
        }
        switch (action) {
            case 'view':
                body['title_page'] = titlePageData['view'];
                body['disabled'] = !body['disabled'];
                break;
            case 'edit':
                body['title_page'] = titlePageData['edit'];
                body['disabled'] = body['disabled'];
                break;
            default:
                body['title_page'] = titlePageData['create'];
                break;
        }
        return body;
    }

    redirectToListFormat(message = null, link = null) {
        if(message != null) {
            this.toastService.infoToastMessage(this.toastService.SUCCESS, message);
        }
        setTimeout(() => {
            if(link) {
                this.router.navigate([link]);
            }
        }, 500);
    }

    // format param sort
    sortFormat(event: LazyLoadEvent, param = null) {
        if (event.sortField) {
            let sort_type;
            if (event.sortOrder == 1) {
                sort_type = 'asc';
            } else {
                sort_type = 'desc';
            }
            return { sort_field: event.sortField, sort_type: sort_type };
        } else {
            return param;
        }
    }

    // format param pagination
    paginationFormat(params) {
        const body = {
            page: params['page'] + 1,
            first: params['first'],
            rows: params['rows'],
            pageCount: params['pageCount']
        }
        return body;
    }

    // format date
    pipe = new DatePipe('en-US');
    dateFormat(params) {
        return this.pipe.transform(params, 'dd/MM/yyyy')
    }

    // format date-time
    datetimeFormat(params) {
        return this.pipe.transform(params, 'dd/MM/yyyy h:mm:ss')
    }

    // format dropdown code-value
    formatDropdown(list, code: string = null, value: string = null) {
        list.forEach(element => {
            element['code_value'] = element['code'] + ' - ' + element['value'];
            if (code !== null && value !== null) {
                element['code_value'] = element[code] + ' - ' + element[value];
            }
        });
        return list;
    }
}
