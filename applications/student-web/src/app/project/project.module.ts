import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CreateUpdateProjectComponent } from './create-update/create-update-project.component';
import { CreateUpdateProjectInformationComponent } from './project-information/create-update/create-update-project-information.component';
import { ProjectInformationComponent } from './project-information/project-information.component';
import { CreateTeacherInformationGroupComponent } from './project-information/teacher-group-information/create/create-teacher-information-group.component';
import { TeacherInformationGroupComponent } from './project-information/teacher-group-information/teacher-information-group.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';

@NgModule({
  imports: [ProjectRoutingModule, SharedModule],
  exports: [ProjectRoutingModule],
  declarations: [
    ProjectComponent,
    CreateUpdateProjectComponent,
    ProjectInformationComponent,
    CreateUpdateProjectInformationComponent,
    TeacherInformationGroupComponent,
    CreateTeacherInformationGroupComponent
  ],
})
export class ProjectModule { }
