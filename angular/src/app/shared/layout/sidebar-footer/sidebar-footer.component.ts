import { AppBaseComponent } from './../../app.base.component';
import { Component, OnInit, Injector, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar-footer',
  templateUrl: './sidebar-footer.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class SidebarFooterComponent extends AppBaseComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  menuItem: MenuItem[] = [
    new MenuItem('::home', '', 'home', '/homme'),
  ];

  l(key: string): string {
    return key;
  }

  showMenuItem(MenuItem): boolean {
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
