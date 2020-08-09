import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SystemSettingComponent } from './system-setting/system-setting.component';
import { CreateOrEditSystemSettingComponent } from './system-setting/create-edit/create-edit-system-setting.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { CreateManageUserComponent } from './manage-user/create/create-manage-user.component';
import { EditManageUserComponent } from './manage-user/edit/edit-manage-user.component';
import { RoleComponent } from './role/role.component';
import { CreateOrEditRoleComponent } from './role/create-edit/create-edit-role.component';
import { ABP } from '@abp/ng.core';
import { SystemSettingPermission, UserPermission, RolesPermission } from '../shared/services/system-configuration/system-permission-name';

const routes = [
  {
    path: 'system-setting',
    children: [
      {
        path: '',
        component: SystemSettingComponent,
        data: {
          routes: {
            name: 'SystemConfiguration::SystemSetting',
            requiredPolicy: SystemSettingPermission.Default
          } as ABP.Route
        }
      },
      {
        path: 'create',
        component: CreateOrEditSystemSettingComponent,
        data: {
          routes: {
            name: 'SystemConfiguration::SystemSettingInformation',
            requiredPolicy: SystemSettingPermission.Create
          } as ABP.Route
        }
      }
      , {
        path: 'edit/:id',
        component: CreateOrEditSystemSettingComponent,
        data: {
          routes: {
            name: 'SystemConfiguration::SystemSettingInformation',
            requiredPolicy: SystemSettingPermission.Update
          } as ABP.Route
        }
      }
    ]
  },
  {
    path: 'manage-user',
    children: [
      {
        path: '',
        component: ManageUserComponent,
        data: {
          routes: {
            name: 'AbpIdentity::Users',
            requiredPolicy: UserPermission.Default,
          } as ABP.Route
        }
      },
      {
        path: 'create',
        component: CreateManageUserComponent,
        data: {
          routes: {
            name: 'AbpIdentity::UserInformation',
            requiredPolicy: UserPermission.Create,
          } as ABP.Route
        }
      }
      , {
        path: 'edit/:id',
        component: EditManageUserComponent,
        data: {
          routes: {
            name: 'AbpIdentity::UserInformation',
            requiredPolicy: UserPermission.Update,
          } as ABP.Route
        }
      }
    ]
  },
  {
    path: 'role',
    children: [
      {
        path: '',
        component: RoleComponent,
        data: {
          routes: {
            name: 'AbpIdentity::Roles',
            requiredPolicy: RolesPermission.Default
          } as ABP.Route
        }
      },
      {
        path: 'create',
        component: CreateOrEditRoleComponent,
        data: {
          routes: {
            name: 'SystemConfiguration::InformationRoles',
            requiredPolicy: RolesPermission.Create
          } as ABP.Route
        }
      }
      , {
        path: 'edit/:id',
        component: CreateOrEditRoleComponent,
        data: {
          routes: {
            name: 'SystemConfiguration::InformationRoles',
            requiredPolicy: RolesPermission.Update
          } as ABP.Route
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
