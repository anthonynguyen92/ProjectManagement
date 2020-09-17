import { Component, Inject,Injector } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ChangePasswordService} from 'src/app/shared/services/system-configuration/change-password/services';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { AuthService } from '@abp/ng.core';
import { Navigate, RouterState } from '@ngxs/router-plugin';
@Component({
    selector: 'change-password-dialog',
    templateUrl: './change-password-dialog.component.html',
    providers: [ChangePasswordService]
  })
  export class ChangePasswordDialog extends AppBaseComponent {
    public vm: any;
    constructor(
      public dialogRef: MatDialogRef<ChangePasswordDialog>,
      private readonly _changePasswordService: ChangePasswordService,
      protected readonly injector: Injector,
      private readonly authService: AuthService,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {
          super(injector);
          this.vm={
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
          }
      }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
    onSubmit(){
        this._changePasswordService.updatePassword({currentPassword:this.vm.currentPassword,newPassword:this.vm.newPassword}).subscribe(() => {
            this.dialogRef.close();
            this.notifySuccess(this.l('AbpIdentity::PasswordChangedMessage'));
            this.authService.logout().subscribe(() => {
                this.store.dispatch(
                    new Navigate(['/'], null, {
                        state: { redirectUrl: this.store.selectSnapshot(RouterState).state.url },
                    }),
                );
                this.redirect('/account/login');
            });
        });
    }
  }
  export interface DialogData {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }