import { Navigate, RouterState } from '@ngxs/router-plugin';
import { AuthService } from '@abp/ng.core';
import { MatDialog } from '@angular/material/dialog';
import { AppBaseComponent } from './../../app.base.component';
import { Component, OnInit, Injector, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sidebar-user-area',
  templateUrl: './sidebar-user-area.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SidebarUserAreaComponent extends AppBaseComponent implements OnInit {

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

}
