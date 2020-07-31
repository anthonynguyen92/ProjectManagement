import { AppBaseComponent } from '../shared/app.base.component';
import { Component, Injector } from '@angular/core';
import { AuthService } from '@abp/ng.core';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent extends AppBaseComponent {

    username: string;
    password: string;

    constructor(protected readonly injector: Injector,
        private readonly authService: AuthService) {
        super(injector);
    }

    login() {
        this.setBusy();
        this.authService.login(this.username, this.password).subscribe(result => {
            this.notifySuccess(this.l('::LoginSuccessfully'));
        },
        () => {
            this.clearBusy();
            this.notifyError(this.l('::LoginUnsuccessfully'));
        },
        () => {
            this.clearBusy();
        })
    }
}