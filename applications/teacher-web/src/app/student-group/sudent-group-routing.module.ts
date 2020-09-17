import { StudentGroupPermission, StudentGroupInformationPermission } from '../shared/services/student/student-permission-name';
import { ABP } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentGroupComponent } from './student-group.component';
import { CreateUpadteStudentGroupInformationComponent } from './student-group-information/create-edit/create-edit-student-group-information.component';
import { CreateOrUpdateStudentGroupComponent } from './create-update/create-update-student-group.component';

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
        path: 'create',
        component: CreateOrUpdateStudentGroupComponent,
      },
      {
        path: 'edit/:id',
        component: CreateOrUpdateStudentGroupComponent,
      },

      // student group information
      {
        path: 'information/create/:studentGroupId',
        component: CreateUpadteStudentGroupInformationComponent,
      },
      {
        path: 'information/edit/:studentGroupId/:id',
        component: CreateUpadteStudentGroupInformationComponent,
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
