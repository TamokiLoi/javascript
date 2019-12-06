import { Table } from 'primeng/table';
import { ConfirmationService } from 'src/app/components/template/prime-custom/common/api';
import { DropdownModel, MasterData, Pagination, ParamsPagination, SortModel, ParamAPI } from 'src/app/common/model';
import { CommonService, FormatService, MessageHandlerService } from 'src/app/common/services';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MasterDataTypeService } from '../../master-data-type/master-data-type.service';
import { MasterDataListService } from '../master-data-list.service';
import { forkJoin } from 'rxjs';
import { LazyLoadEvent } from 'primeng/api';

@Component({
    selector: 'master-data-list',
    templateUrl: './master-data-list.component.html',
    styleUrls: ['./master-data-list.component.scss'],
})
export class MasterDataListComponent implements OnInit {

    // form
    formSearch: FormGroup;

    // master-data
    masterDataTypes: DropdownModel[] = [];
    statuses: DropdownModel[] = [];

    // table
    data: MasterData[] = [];
    cols: any[];
    paramsSort: SortModel;
    pagination: Pagination = new Pagination();
    paramsPagination: ParamsPagination = new ParamsPagination();

    @ViewChild('table', { static: true }) table: Table;

    constructor(
        private fb: FormBuilder,
        private formatService: FormatService,
        private confirmationService: ConfirmationService,
        private toastService: MessageHandlerService,
        private commonService: CommonService,
        private service: MasterDataListService,
        private masterDataTypeService: MasterDataTypeService,
    ) {
        this.formSearch = this.fb.group({
            md_type: [null],
            md_code: [null],
            md_name: [null],
            md_des: [null],
            sts_code: [null],
        });
        this.cols = [
            { field: 'md_type', header: 'Type' },
            { field: 'md_code', header: 'Code' },
            { field: 'md_name', header: 'Name' },
            { field: 'md_des', header: 'Description' },
            { field: 'created_by_name', header: 'Created By' },
            { field: 'created_at', header: 'Created At' },
            { field: 'updated_by_name', header: 'Updated By' },
            { field: 'updated_at', header: 'Updated At' },
        ];
    }

    ngOnInit() {
        this.fetchData();
    }

    fetchData() {
        forkJoin([
            this.masterDataTypeService.getDropdown(),
            this.commonService.getStatus(),
        ]).subscribe(res => {
            this.masterDataTypes = res[0].data ? this.formatService.formatDropdown(res[0].data) : [];
            this.statuses = res[1].data ? this.formatService.formatDropdown(res[1].data) : [];
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
            this.data.forEach(element => {
                element['created_at'] = this.formatService.datetimeFormat(element['created_at']);
                element['updated_at'] = this.formatService.datetimeFormat(element['updated_at']);
            });
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
        this.getList();
    }

    onPageChange(params) {
        this.paramsPagination = this.formatService.paginationFormat(params);
        this.getList();
    }

    delete(id) {
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
