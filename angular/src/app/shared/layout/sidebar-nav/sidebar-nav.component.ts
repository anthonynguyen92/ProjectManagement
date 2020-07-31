import { AppBaseComponent } from './../../app.base.component';
import { Component, OnInit, Injector, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  encapsulation: ViewEncapsulation.None
})
export class SidebarNavComponent extends AppBaseComponent {

  menuItems: MenuItem[] = [
    new MenuItem('::Home', '', 'home', '/home'),

  ];

  constructor(injector: Injector) {
    super(injector);
  }

  showMenuItem(menuItem): boolean {
    if (menuItem.permissionName) {
      return this.getGrantedPolicy(menuItem.permissionName);
    }

    return true;
  }
}


export class MenuItem {
  name = '';
  permissionName = '';
  icon = '';
  route = '';
  items: MenuItem[];

  constructor(name: string, permissionName: string, icon: string, route: string, childItems: MenuItem[] = null) {
    this.name = name;
    this.permissionName = permissionName;
    this.icon = icon;
    this.route = route;

    if (childItems) {
      this.items = childItems;
    } else {
      this.items = [];
    }
  }
}

