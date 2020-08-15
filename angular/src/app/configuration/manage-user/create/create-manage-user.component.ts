import { Component, OnInit, AfterViewInit, Injector } from '@angular/core';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { IdentityService, Identity } from '@abp/ng.identity';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';

@Component({
  templateUrl: './create-manage-user.component.html',
  animations: [appModuleAnimation()],
})
export class CreateManageUserComponent extends AppBaseComponent implements OnInit, AfterViewInit {
  public vm: Identity.UserSaveRequest;
  public listRoleNames: any[] = [];
  constructor(protected readonly injector: Injector,
    private readonly _userService: IdentityService) {
    super(injector);
    this.vm = {
      email: null,
      lockoutEnabled: true,
      name: null,
      phoneNumber: null,
      surname: null,
      twoFactorEnabled: true,
      userName: null,
      password: null,
      roleNames: []
    }
  }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.title = 'UserInformation';
     this._userService.getAllRoles().subscribe(
      result => {
        this.listRoleNames = result.items;
      }
    );
  }
  goBack() {
    this.redirect('configuration/manage-user');
  }
  save() {
    if (this.vm) {
      this.setBusy();
      this.vm.roleNames = this.listRoleNames
        .filter(x => x.isChecked === true)
        .map(x => x.name);

      this._userService.createUser(this.vm).subscribe(() => {
        this.notifySuccess(this.l('::CreateSuccessfully'));
        this.goBack();
      }, () => { this.clearBusy() }, () => {
        this.clearBusy();
      });
    }
  }
}