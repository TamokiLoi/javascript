import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loading: Boolean = false;
    submitted: Boolean = false;
    form: FormGroup;

    constructor(
        private router: Router,
        private _authService: AuthService,
    ) {

    }

    ngOnInit() {
        this.form = new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });
    }

    onSubmit() {
        this.submitted = true;
        // console.log(this.form)
        if (this.form.valid) {
            this.loading = true;
            this._authService.testAPI().subscribe((res) => {
                // console.log(res)
            })
            // this._authService.login(this.form.value).subscribe((res) => {
            //     this.loading = false;
            //     console.log(res)
            // })
            const res = this._authService.loginFake(this.form.value);
            this.router.navigate(['/']);
            // console.log(this._authService.login(this.form.value));
            localStorage.setItem('id_token', res.data.token);
            localStorage.setItem('jwt', res.data.token);
        }
    }

}
