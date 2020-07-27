import { AppBaseComponent } from './../shared/app.base.component';
import { Component, OnInit, Injector } from '@angular/core';
import { AuthService } from '@abp/ng.core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent extends AppBaseComponent {

  username: string;
  password: string;

  constructor(private readonly authService: AuthService,
    protected readonly injector: Injector) {
    super(injector);
  }
  login() {
    this.setBusy();
    this.authService.login(this.username, this.password).subscribe(() => {
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
