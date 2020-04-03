/*=================================
 LIST API CONFIG
 ===================================*/
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class APIConfig {
    /* API BRANCH URLs */
    public API_BASE = environment.API.apiBase;

    /* API SUB-URLs */
    public LOGIN = this.API_BASE + '/login';
    // public RESET_PASS = this.API_MASTER + '/reset-password';
    // public FORGOT_PASS = this.API_AUTHEN + '/v1/auth/change-password';
    // public RESET_PASS_TOKEN = this.API_MASTER + '/check-reset-password-token';
    // public SETUP_PASS = this.API_MASTER + '/setup-password';

}