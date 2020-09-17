import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProjectInformationComponent } from './project-information/project-information.component';
import { TeacherInformationGroupComponent } from './project-information/teacher-group-information/teacher-group-information.component';
import { ViewProjectInformationComponent } from './project-information/view/view-project-information.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ViewProjectComponent } from './view/view-project.component';

@NgModule({
  imports: [ProjectRoutingModule, SharedModule],
  exports: [ProjectRoutingModule],
  declarations: [
    ProjectComponent,
    ViewProjectComponent,
    ProjectInformationComponent,
    ViewProjectInformationComponent,
    TeacherInformationGroupComponent,
  ],
})
export class ProjectModule { }
