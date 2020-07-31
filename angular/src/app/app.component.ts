import { AccountComponent } from './account/account.component';
import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import {  AddReplaceableComponent } from '@abp/ng.core';
import { eThemeBasicComponents } from '@abp/ng.theme.basic';
import { eAccountComponents } from '@abp/ng.account';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(
      new AddReplaceableComponent({
        component: AccountComponent,
        key: eAccountComponents.Login
      })
    );
  }
}
