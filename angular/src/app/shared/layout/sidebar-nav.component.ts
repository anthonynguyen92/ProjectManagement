import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { AppBaseComponent } from '../app.base.component';
import { UserPermission } from 'src/app/shared/services/system-configuration/system-permission-name';
import { StudentPermission, TeacherPermission } from '../services/student/student-permission-name';

@Component({
  templateUrl: './sidebar-nav.component.html',
  selector: 'sidebar-nav',
  encapsulation: ViewEncapsulation.None
})
export class SideBarNavComponent extends AppBaseComponent {

  menuItems: MenuItem[] = [
    new MenuItem('::Home', '', 'home', '/home'),
    new MenuItem('SystemConfiguration::SystemConfiguration', '', 'settings', '', [
      new MenuItem('SystemConfiguration::SystemSetting', SystemSettingPermission.Default, 'list_alt', '/configuration/system-setting'),
      new MenuItem('AbpIdentity::Users', UserPermission.Default, 'account_box', '/configuration/manage-user'),
      new MenuItem('AbpIdentity::Roles', '', 'group', '/configuration/role')
    ]),
    new MenuItem('::Student', StudentPermission.Default, 'person', '/student/management'),
    new MenuItem('::Teacher', TeacherPermission.Default, 'perm_contact_calendar', '/teacher/management'),

  ];

  constructor(
    injector: Injector
  ) {
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

