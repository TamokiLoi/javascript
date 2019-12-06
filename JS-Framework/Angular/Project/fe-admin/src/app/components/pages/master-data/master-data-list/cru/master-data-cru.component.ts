import { forkJoin } from 'rxjs';
import { MessageConstant } from 'src/app/common/constant';
import { Action, DropdownModel, MasterData } from 'src/app/common/model';
import { CommonService, FormatService } from 'src/app/common/services';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MasterDataTypeService } from '../../master-data-type/master-data-type.service';
import { MasterDataListService } from '../master-data-list.service';

@Component({
    selector: 'master-data-cru',
    templateUrl: './master-data-cru.component.html',
    styleUrls: ['./master-data-cru.component.scss']
})
export class MasterDataCruComponent implements OnInit {

    formDetail: FormGroup;
    errorMessage = MessageConstant.ERROR_MESSAGE;

    id: number;
    paramAction: Action;
    paramMasterData = {
        md_type: '',
        md_code: '',
    };
    detail: MasterData;
    titlePage: string;
    titlePageData = {
        'create': 'Create New Master Data',
        'view': 'View Master Data',
        'edit': 'Update Master Data',
    };

    // master-data
    masterDataTypes: DropdownModel[] = [];
    statuses: DropdownModel[] = [];

    constructor(
        private fb: FormBuilder,
        private formatService: FormatService,
        private activatedRoute: ActivatedRoute,
        private commonService: CommonService,
        private service: MasterDataListService,
        private masterDataTypeService: MasterDataTypeService,
    ) {
        this.formDetail = this.fb.group({
            md_type: [null, Validators.required],
            md_code: [null, Validators.required],
            md_name: [null, Validators.required],
            md_des: [null],
            sts_code: [null],
        });
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            if (params['mdType'] && params['mdCode'] && params['action']) {
                this.paramMasterData['md_type'] = params['mdType'];
                this.paramMasterData['md_code'] = params['mdCode'];
                this.getDetail();
            }
            this.paramAction = this.formatService.actionFormat(params['action'], this.titlePageData);
        });
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

    getDetail() {
        this.service.getDetail(this.paramMasterData).subscribe((res) => {
            if (res.data) {
                this.detail = res.data;
                this.formDetail.patchValue(res.data);
            }
        })
    }

    onSubmit() {
        if (this.formDetail.valid) {
            this.formDetail.patchValue({ ['md_code']: this.formDetail.value['md_code'].toUpperCase() });
            if (this.paramMasterData['md_code']) {
                this.service.update(this.paramMasterData['md_code'], this.formDetail.value)
                    .subscribe((res: any) => {
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
            this.formatService.redirectToListFormat(res.data.message, '/master-data/master-data-list');
        }
    }

}
