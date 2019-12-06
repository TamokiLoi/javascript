import { MessageConstant } from 'src/app/common/constant';
import { Action, UserDetail } from 'src/app/common/model';
import { FormatService } from 'src/app/common/services';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../user.service';

@Component({
    selector: 'user-cru',
    templateUrl: './user-cru.component.html',
    styleUrls: ['./user-cru.component.scss']
})
export class UserCruComponent implements OnInit {

    formDetail: FormGroup;
    errorMessage = MessageConstant.ERROR_MESSAGE;

    id: number;
    paramAction: Action;
    detail: UserDetail;
    titlePage: string;
    titlePageData = { 
        'create': 'Create New User',
        'view': 'View User',
        'edit': 'Update User',
    };

    constructor(
        private fb: FormBuilder,
        private formatService: FormatService,
        private activatedRoute: ActivatedRoute,
        private service: UserService,
    ) {
        // init form-detail
        this.formDetail = this.fb.group({
            username: [null, Validators.required],
            password: [null],
            password_confirmation: [null],
            email: [null, Validators.compose([Validators.required, Validators.email])],
            phone: [null],
            address: [null],
        });
    }

    ngOnInit() {
        // check param url get id and action
        this.activatedRoute.params.subscribe(params => {
            if (params.id && params['action']) {
                this.id = params.id;
                this.getDetail();
            } else {
                this.formDetail.controls['password'].setValidators([Validators.required]);
                this.formDetail.controls['password'].updateValueAndValidity();
            }
            this.paramAction = this.formatService.actionFormat(params['action'], this.titlePageData);
        });
    }

    // get form-detal by id
    getDetail() {
        this.service.getDetail(this.id).subscribe((res) => {
            if (res.data) {
                this.detail = res.data;
                this.formDetail.patchValue(res.data);
            }
        })
    }

    // call api submit update or create by id
    onSubmit() {
        if (this.formDetail.valid) {
            if (this.id) {
                this.service.update(this.id, this.formDetail.value).subscribe((res: any) => {
                    this.redirectToList(res);
                })
            } else {
                this.formDetail.patchValue({ ['password_confirmation']: this.formDetail.value['password'] });
                this.service.create(this.formDetail.value).subscribe((res: any) => {
                    this.redirectToList(res);
                })
            }
        }
    }

    // redirect to list after call api success
    redirectToList(res) {
        if (res.data && res.data.message) {
            this.formatService.redirectToListFormat(res.data.message, '/administration/user');
        }
    }
}
