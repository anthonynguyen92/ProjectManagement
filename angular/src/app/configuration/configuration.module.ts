import { NgModule } from '@angular/core';
import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ResourceServerComponent } from './resource-server/resource-server.component';
import { CreateOrEditResourceServerComponent } from './resource-server/create-edit/create-edit-resource-server.component';
import { SharedModule } from '../shared/shared.module';
import { SystemSettingComponent } from './system-setting/system-setting.component';
import { CreateOrEditSystemSettingComponent } from './system-setting/create-edit/create-edit-system-setting.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { CreateManageUserComponent } from './manage-user/create/create-manage-user.component';
import { EditManageUserComponent } from './manage-user/edit/edit-manage-user.component';
import { RoleComponent } from './role/role.component';
import { CreateOrEditRoleComponent } from './role/create-edit/create-edit-role.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { CreateOrEditEmailTemplateComponent } from './email-template/create-edit/create-edit-email-template.component';
@NgModule({
imports: [
  ConfigurationRoutingModule,
  SharedModule
],
declarations: [
  EmailTemplateComponent,
  ResourceServerComponent,
  CreateOrEditResourceServerComponent,
  SystemSettingComponent,
  CreateOrEditSystemSettingComponent,
  ManageUserComponent,
  CreateManageUserComponent,
  EditManageUserComponent,
  RoleComponent,
  CreateOrEditRoleComponent,
  CreateOrEditEmailTemplateComponent
],
exports: [ConfigurationRoutingModule]
})
export class ConfigurationModule {}
