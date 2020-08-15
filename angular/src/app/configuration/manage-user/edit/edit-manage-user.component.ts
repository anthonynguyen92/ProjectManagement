import { Component, OnInit, AfterViewInit, Injector } from '@angular/core';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { IdentityService } from '@abp/ng.identity';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
@Component({
  templateUrl: './edit-manage-user.component.html',
  animations: [appModuleAnimation()],
})
export class EditManageUserComponent extends AppBaseComponent implements OnInit, AfterViewInit {

  get id(): string {
    return this.getParamId('id');
  }
  public listRoleNames: any[] = [];
  public passWordConfirm: string;
  public vm: any;
  constructor(protected readonly injector: Injector,
    private readonly _userService: IdentityService) {
    super(injector);
    this.vm = {
      email: null,
      lockoutEnabled: null,
      name: null,
      phoneNumber: null,
      surname: null,
      twoFactorEnabled: null,
      userName: null,
      concurrencyStamp: null,
      emailConfirmed: null,
      id: null,
      isLockedOut: null,
      phoneNumberConfirmed: null,
      tenantId: null,
      password: null,
      roleNames: []
    }
  }
  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
    this.title = 'UserInformation';
    this._userService.getUserById(this.id).subscribe((data) => {
      if (data) {
        this.vm = {
          ...data
        };
      }
    })
    this._userService.getAllRoles().subscribe(
      result => {
        this.listRoleNames = result.items;

        this._userService.getUserRoles(this.id).subscribe(
          userRoles => {
            this.listRoleNames.forEach(item => {
              const idx = userRoles.items.findIndex(x => x.id === item.id);
              if (idx > -1) {
                item.isChecked = true;
              }
            });
          }
        );
      }
    );

  }
  goBack() {
    this.redirect('configuration/manage-user');
  }
  save() {
    if (this.vm) {
      this.setBusy();
      if (this.passWordConfirm || this.vm.pasword) {
        if (this.passWordConfirm !== this.vm.password) {
          this.notifyError(this.l('AbpIdentity::Identity.PasswordConfirmationFailed'));
          return;
        }
      }

      this.vm.roleNames = this.listRoleNames
        .filter(x => x.isChecked === true)
        .map(x => x.name);

      this._userService.updateUser(this.vm).subscribe(() => {
        this.notifySuccess(this.l('::UpdateSuccessfully'));
        this.goBack();
      }, ()=>{this.clearBusy()}, () => {
        this.clearBusy();
      });
    }
  }
}
