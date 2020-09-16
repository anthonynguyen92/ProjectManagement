import { NgModule } from '@angular/core';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SystemSettingComponent } from './system-setting/system-setting.component';
import { CreateOrEditSystemSettingComponent } from './system-setting/create-edit/create-edit-system-setting.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { CreateManageUserComponent } from './manage-user/create/create-manage-user.component';
import { EditManageUserComponent } from './manage-user/edit/edit-manage-user.component';
import { RoleComponent } from './role/role.component';
import { CreateOrEditRoleComponent } from './role/create-edit/create-edit-role.component';
@NgModule({
  imports: [
    ConfigurationRoutingModule,
    SharedModule
  ],
  declarations: [
    SystemSettingComponent,
    CreateOrEditSystemSettingComponent,
    ManageUserComponent,
    CreateManageUserComponent,
    EditManageUserComponent,
    RoleComponent,
    CreateOrEditRoleComponent,
  ],
  exports: [ConfigurationRoutingModule]
})
export class ConfigurationModule { }
