import { MessageConstant } from 'src/app/common/constant';
import { Action, DropdownModel, MasterDataType } from 'src/app/common/model';
import { CommonService, FormatService } from 'src/app/common/services';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MasterDataTypeService } from '../master-data-type.service';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'master-data-type-cru',
    templateUrl: './master-data-type-cru.component.html',
    styleUrls: ['./master-data-type-cru.component.scss']
})
export class MasterDataTypeCruComponent implements OnInit {

    formDetail: FormGroup;
    errorMessage = MessageConstant.ERROR_MESSAGE;

    id: number;
    paramAction: Action;
    detail: MasterDataType;
    titlePage: string;
    titlePageData = {
        'create': 'Create New Master Data Type',
        'view': 'View Master Data Type',
        'edit': 'Update Master Data Type',
    };

    // master-data
    statuses: DropdownModel[] = [];

    constructor(
        private fb: FormBuilder,
        private formatService: FormatService,
        private activatedRoute: ActivatedRoute,
        private commonService: CommonService,
        private service: MasterDataTypeService,
    ) {
        this.formDetail = this.fb.group({
            md_type: [null, Validators.required],
            md_name: [null, Validators.required],
            md_des: [null],
            sts_code: [null],
        });
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            if (params.id && params['action']) {
                this.id = params.id;
                this.getDetail();
            }
            this.paramAction = this.formatService.actionFormat(params['action'], this.titlePageData);
        });
    }

    fetchData() {
        this.commonService.getStatus().subscribe((res) => {
            this.statuses = res.data ? this.formatService.formatDropdown(res.data ) : [];
        })
    }

    getDetail() {
        this.service.getDetail(this.id).subscribe((res) => {
            if (res.data) {
                this.detail = res.data;
                this.formDetail.patchValue(res.data);
                this.fetchData();
            }
        })
    }

    onSubmit() {
        if (this.formDetail.valid) {
            this.formDetail.patchValue({ ['md_type']: this.formDetail.value['md_type'].toUpperCase() });
            if (this.id) {
                this.service.update(this.id, this.formDetail.value).subscribe((res: any) => {
                    this.redirectToList(res);
                })
            } else {
                this.formDetail.removeControl('sts_code');
                this.service.create(this.formDetail.value).subscribe((res: any) => {
                    this.redirectToList(res);
                })
            }
        }
    }

    redirectToList(res) {
        if (res.data && res.data.message) {
            this.formatService.redirectToListFormat(res.data.message, '/master-data/master-data-type');
        }
    }
}
