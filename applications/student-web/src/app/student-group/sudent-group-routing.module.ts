
import { StudentGroupPermission, StudentGroupInformationPermission } from '../shared/services/student/student-permission-name';
import { ABP } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentGroupComponent } from './student-group,component';
import { ViewStudentGroupComponent } from './view/view-student-group.component';
import { ViewStudentGroupInformationComponent } from './student-group-information/view/view-student-group-information.component';

const routes = [
  {
    path: 'group-student',
    children: [
      {
        path: '',
        component: StudentGroupComponent,
        data: {
          routes: {
            name: '::StudentManagement',
            requiredPolicy: StudentGroupPermission.Default
          } as ABP.Route
        },
      },
      {
        path: 'edit/:id',
        component: ViewStudentGroupComponent,
        data: {
          routes: {
            name: ':Information',
            requiredPolicy: StudentGroupPermission.Default
          } as ABP.Route
        },
      },
      {
        path: 'information/edit/:studentGroupId/:id',
        component: ViewStudentGroupInformationComponent,
        data: {
          routes: {
            name: ':Information',
            requiredPolicy: StudentGroupInformationPermission.Default
          } as ABP.Route
        },
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class StudentGroupRoutingModule {

}
