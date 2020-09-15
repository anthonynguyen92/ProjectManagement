import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppBaseComponent } from '../shared/app.base.component';
import { ProjectInformationPermission, ProjectPermission } from '../shared/services/project/project-permission-name';
import { ProjectComponent } from './project.component';
import { ABP } from '@abp/ng.core';
import { CreateUpdateProjectComponent } from './create-update/create-update-project.component';
import { CreateUpdateProjectInformationComponent } from './project-information/create-update/create-update-project-information.component';
import { CreateTeacherInformationGroupComponent } from './project-information/teacher-group-information/create/create-teacher-information-group.component';
import { TeacherInformationGroupPermission } from '../shared/services/student/student-permission-name';

const routes = [
  {
    path: 'list',
    children: [
      {
        path: '',
        component: ProjectComponent,
        data: {
          name: '::Project',
          requiredPolicy: ProjectPermission.Default
        } as ABP.Route
      },
      {
        path: 'create',
        component: CreateUpdateProjectComponent,
        data: {
          name: '::Project',
          requiredPolicy: ProjectPermission.Create
        } as ABP.Route
      },
      {
        path: 'edit/:id',
        component: CreateUpdateProjectComponent,
        data: {
          name: '::Project',
          requiredPolicy: ProjectPermission.Update
        } as ABP.Route
      },
      {
        path: 'information/create/:projectId',
        component: CreateUpdateProjectInformationComponent,
        data: {
          routes: {
            name: ':Information',
            requiredPolicy: ProjectInformationPermission.Create
          } as ABP.Route
        },
      },
      {
        path: 'information/edit/:projectId/:id',
        component: CreateUpdateProjectInformationComponent,
        data: {
          routes: {
            name: ':Information',
            requiredPolicy: ProjectInformationPermission.Update
          } as ABP.Route
        },
      },
      {
        path:'teacher/create/:id/:projectId',
        component: CreateTeacherInformationGroupComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ProjectRoutingModule {

}
