import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { forkJoin } from 'rxjs';
import { MessageConstant } from 'src/app/common/constant';
import {
    DropdownModel, LanguageModel, Pagination, ParamsPagination, SortModel
} from 'src/app/common/model';
import { CommonService, FormatService, MessageHandlerService } from 'src/app/common/services';
import { TranslateService } from 'src/app/common/translate/translate.service';
import { ConfirmationService } from 'src/app/components/template/prime-custom/common/api';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LanguageAdminService } from './language.service';

@Component({
    selector: 'language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.scss'],
})
export class LanguageComponent implements OnInit {

    // form
    formDetail: FormGroup;
    formSearch: FormGroup;
    errorMessage = MessageConstant.ERROR_MESSAGE;

    // master-data
    languages: DropdownModel[] = [];
    categories: DropdownModel[] = [];

    // table
    data: LanguageModel[] = [];
    cols: any[];
    paramsSort: SortModel;
    pagination: Pagination;
    paramsPagination: ParamsPagination = new ParamsPagination();

    @ViewChild('table', { static: true }) table: Table;

    // dialog
    display: boolean = false;
    currentValue;

    constructor(
        private fb: FormBuilder,
        private formatService: FormatService,
        private confirmationService: ConfirmationService,
        private toastService: MessageHandlerService,
        private commonService: CommonService,
        private service: LanguageAdminService,
        private translateService: TranslateService,
    ) {
        // init form
        this.formSearchInit();
    }

    ngOnInit() {
        this.fetchData();
    }

    formSearchInit() {
        this.formSearch = this.fb.group({
            language: [this.translateService._currentLang],
            category: [null],
            message_code: [null],
            message_translation: [null],
        });
        this.formDetail = this.fb.group({
            id: 0,
            language: [this.translateService._currentLang],
            category: [null, Validators.required],
            message_code: [null, Validators.required],
            message_translation: [null],
        });
    }

    fetchData() {
        forkJoin([
            this.commonService.getMasterData('LANG'),
            this.commonService.getMasterData('LCAT'),
        ]).subscribe(res => {
            this.languages = res[0].data ? this.formatService.formatDropdown(res[0].data) : [];
            this.categories = res[1].data ? this.formatService.formatDropdown(res[1].data) : [];
        });
    }

    getList(page = 1) {
        let params = '?limit=' + this.paramsPagination.rows + '&page=' + this.paramsPagination.page;

        // search params
        if (this.formSearch && this.formSearch.value) {
            for (const i in this.formSearch.value) {
                if (this.formSearch.value[i] !== null && this.formSearch.value[i] !== '') {
                    params += '&' + i + '=' + this.formSearch.value[i];
                }
            }
        }

        // sort params
        if (this.paramsSort && this.paramsSort.sort_field) {
            params += '&sort[' + this.paramsSort.sort_field + ']=' + this.paramsSort.sort_type;
        }

        // call api get data
        this.service.getList(params).subscribe((res: any) => {
            this.data = res.data;
            if (res.data.length > 0) {
                const pagination = {
                    links: res['links'],
                    meta: res['meta']
                }
                this.pagination = pagination;
            }
        })
    }

    onSearch(language = null) {
        if (language) {
            this.formDetail.patchValue({ ['language']: this.formSearch.value['language'] });
        }
        this.getList();
    }

    onReset() {
        this.formSearchInit();
        this.table.sortOrder = 0;
        this.table.sortField = '';
        this.table.reset();
    }

    onSort(event: LazyLoadEvent) {
        this.paramsSort = this.formatService.sortFormat(event, { sort_field: 'id', sort_type: 'desc' });
        this.getList();
    }

    onPageChange(params) {
        this.paramsPagination = this.formatService.paginationFormat(params);
        this.getList();
    }

    onSubmit() {
        if (this.formDetail.valid) {
            if (this.formDetail.value.id !== 0) {
                this.service.update(this.formDetail.value.id, this.formDetail.value).subscribe((res: any) => {
                    this.handlerSuccess(res);
                })
            } else {
                this.service.create(this.formDetail.value).subscribe((res: any) => {
                    this.handlerSuccess(res);
                    this.onClose();
                    this.getList();
                })
            }
        }
    }

    onUpdate(data, value) {
        data['category'] = data['category_code'];
        if (data['id'] !== 0 && this.currentValue !== value) {
            this.formDetail.patchValue(data);
            this.onSubmit();
        }
    }

    onFocus(value) {
        this.currentValue = value;
    }

    onClose() {
        this.display = false;
        this.formDetail.reset();
    }

    handlerSuccess(res) {
        if (res.data && res.data.message) {
            this.refeshLanguage();
            this.formatService.redirectToListFormat(res.data.message);
        }
    }

    onDelete(id) {
        if (id) {
            this.confirmationService.confirm({
                message: 'Do you want to delete this record?',
                header: 'Delete Confirmation',
                accept: () => {
                    this.service.delete(id).subscribe((res) => {
                        if (res.data) {
                            this.refeshLanguage();
                            this.toastService.infoToastMessage(this.toastService.SUCCESS, res.data.message);
                            this.getList();
                        }
                    })
                }
            });
        }
    }

    refeshLanguage() {
        this.translateService.refreshLang();
    }

}
