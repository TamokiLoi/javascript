import { MessageConstant } from 'src/app/common/constant';
import { AuthService, MessageHandlerService } from 'src/app/common/services';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/common';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    errorMessage = MessageConstant.ERROR_MESSAGE;
    loading: Boolean = false;
    submitted: Boolean = false;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private _authService: AuthService,
        private toastService: MessageHandlerService,
        private httpService: HttpClientService,
    ) { }

    ngOnInit() {
        this.form = this.fb.group({
            username: [null, Validators.required],
            password: [null, Validators.required]
        });
    }

    onSubmit() {
        this.submitted = true;
        if (this.form.valid) {
            this.loading = true;
            this._authService.login(this.form.value).subscribe(
                (res) => {
                    this.loading = false;
                    localStorage.setItem('id_token', res.access_token);
                    localStorage.setItem('jwt', res.access_token);
                    localStorage.setItem('expires_in', res.expires_in);
                    localStorage.setItem('user_info', JSON.stringify(res.user_info));
                    this.toastService.infoToastMessage(this.toastService.SUCCESS, 'Welcome ' + res.user_info['username'] + ' to admin page');
                    this.httpService.onGetLanguage.next(true);
                    setTimeout(() => {
                        this.router.navigate(['/']);
                    }, 1000);
                }, (err) => {
                    this.loading = false;
                    if (err.status == 401 && err.statusText == 'Unauthorized') {
                        this.toastService.infoToastMessage(this.toastService.ERROR, 'Username or Password is incorrect');
                    } else {
                        this.toastService.infoToastMessage(this.toastService.ERROR, err.statusText);
                    }
                })
        }
    }

}
