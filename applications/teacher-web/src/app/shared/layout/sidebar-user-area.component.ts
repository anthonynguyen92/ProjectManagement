import { Component, OnInit, ViewEncapsulation, Injector, Inject } from '@angular/core';
import { AuthService } from '@abp/ng.core';
import { Navigate, RouterState } from '@ngxs/router-plugin';
import { AppBaseComponent } from '../app.base.component';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordDialog } from './change-password-dialog.component';
import { StudentService } from '../services/student/services';
import { TeacherService } from '../services/teacher/services/intex';

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
    private readonly authService: AuthService,
    private readonly _teacherService: TeacherService
  ) {
    super(injector);
  }

  // fix user and email
  ngOnInit() {
    this._teacherService.getCurretnTeacherUser().subscribe(data => {
      this.shownLoginName = data.name;
      this.shownLoginEmail = data.email;
    })
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
