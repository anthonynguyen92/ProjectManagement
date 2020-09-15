import { Component, OnInit, ViewEncapsulation, Injector,Inject } from '@angular/core';
import { AuthService } from '@abp/ng.core';
import { Navigate, RouterState } from '@ngxs/router-plugin';
import { AppBaseComponent } from '../app.base.component';
import {MatDialog} from '@angular/material/dialog';
import {ChangePasswordDialog} from './change-password-dialog.component';

@Component({
    templateUrl: './sidebar-user-area.component.html',
    selector: 'sidebar-user-area',
    encapsulation: ViewEncapsulation.None
})
export class SideBarUserAreaComponent extends AppBaseComponent implements OnInit {

    shownLoginName = '';
    shownLoginEmail = '';
    constructor(
        public dialog: MatDialog,
        protected readonly injector: Injector,
        private readonly authService: AuthService
    ) {
        super(injector);
    }

    ngOnInit() {
        this.shownLoginName = this.config.getDeep('currentUser.userName');
        this.shownLoginEmail = this.config.getDeep('currentUser.email');
    }

    logout(): void {
        this.authService.logout().subscribe(() => {
            this.store.dispatch(
                new Navigate(['/'], null, {
                    state: { redirectUrl: this.store.selectSnapshot(RouterState).state.url },
                }),
            );
            this.redirect('/account/login');
        });
    }
    
    openDialog(): void {
        const dialogRef = this.dialog.open(ChangePasswordDialog, {
          width: 'auto',
        });
      }
 
}
