import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { ConfirmationService } from 'src/app/components/template/prime-custom/common/api';
import { MessageConstant } from 'src/app/common/constant';
import { Pagination, ParamsPagination, SortModel, User } from 'src/app/common/model';
import { FormatService, MessageHandlerService } from 'src/app/common/services';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    // form
    formSearch: FormGroup;
    errorMessage = MessageConstant.ERROR_MESSAGE; // define validator error-message

    // table
    data: User[] = [];
    cols: any[];
    paramsSort: SortModel;
    pagination: Pagination = new Pagination();
    paramsPagination: ParamsPagination = new ParamsPagination();

    @ViewChild('table', { static: true }) table: Table;

    // demo dialog
    display: boolean = false;

    constructor(
        private fb: FormBuilder,
        private formatService: FormatService,
        private confirmationService: ConfirmationService,
        private toastService: MessageHandlerService,
        private service: UserService,
    ) {
        // init form
        this.formSearch = this.fb.group({
            username: [null],
            email: ['', Validators.email],
            phone: [null],
            address: [null],
        });

        // init table header and column
        this.cols = [
            { field: 'username', header: 'Name' },
            { field: 'email', header: 'Email' },
            { field: 'phone', header: 'Phone' },
            { field: 'address', header: 'Address' }
        ];
    }

    ngOnInit() { }

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

    onSearch() {
        this.getList();
    }

    onReset() {
        this.formSearch.reset();
        this.table.sortOrder = 0;
        this.table.sortField = '';
        this.table.reset();
    }

    onSort(event: LazyLoadEvent) {
        this.paramsSort = this.formatService.sortFormat(event, { sort_field: 'id', sort_type: 'desc' });
        // by lazyload auto init call api when render page
        this.getList();
    }

    onPageChange(params) {
        this.paramsPagination = this.formatService.paginationFormat(params);
        this.getList();
    }

    delete(id) {
        // this.display = true;
        if (id) {
            this.confirmationService.confirm({
                message: 'Do you want to delete this record?',
                header: 'Delete Confirmation',
                accept: () => {
                    this.service.delete(id).subscribe((res) => {
                        if (res.data) {
                            this.toastService.infoToastMessage(this.toastService.SUCCESS, res.data.message);
                            this.getList();
                        }
                    })
                }
            });
        }
    }
}
