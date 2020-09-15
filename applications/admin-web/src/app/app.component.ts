import { LazyLoadService, AddReplaceableComponent } from '@abp/ng.core';
import { eThemeBasicComponents } from '@abp/ng.theme.basic';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FtAccountLayoutComponent } from './shared/layout/ft-account-layout/ft-account-layout.component';
import { LoginComponent } from './login/login.component';
import { eAccountComponents } from '@abp/ng.account';

declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  constructor(private lazyLoadService: LazyLoadService, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(
      new AddReplaceableComponent({
        component: FtAccountLayoutComponent,
        key: eThemeBasicComponents.ApplicationLayout,
      })
    );

    this.store.dispatch(
      new AddReplaceableComponent({
        component: LoginComponent,
        key: eAccountComponents.Login
      })
    );
  }
}
