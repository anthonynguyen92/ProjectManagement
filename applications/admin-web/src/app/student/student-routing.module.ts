
import { StudentPermission, StudentGroupPermission, StudentGroupInformationPermission } from '../shared/services/student/student-permission-name';
import { ABP } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreatOrEditStudentComponent } from './student/create-edit/create-edit-student.component';
import { StudentComponent } from './student/student.component';
import { StudentGroupComponent } from './student-group/student-group.component';
import { CreateOrUpdateStudentGroupComponent } from './student-group/create-edit/create-update-student-group.component';
import { CreateEditStudentGroupInformationComponent } from './student-group/student-group-information/create-update/create-update-student-group-information.component';
import { StudentGroupInformationService } from '../shared/services/student/student-group-information/service';
import { CreateOrUpdateStudentGroupInformationDto } from '../shared/services/student/student-group-information/models';

const routes = [
  {
    path: 'management',
    children: [
      {
        path: '',
        component: StudentComponent,
        data: {
          routes: {
            name: 'StudentManagement:StudentManagement',
            requiredPolicy: StudentPermission.Default
          } as ABP.Route
        },
      },
      {
        path: 'create',
        component: CreatOrEditStudentComponent,
        data: {
          routes: {
            name: 'StudentManagement:Information',
            requiredPolicy: StudentPermission.Create
          } as ABP.Route
        },
      },
      {
        path: 'edit/:id',
        component: CreatOrEditStudentComponent,
        data: {
          routes: {
            name: 'StudentManagement:Information',
            requiredPolicy: StudentPermission.Update
          } as ABP.Route
        },
      }
    ]
  },
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
        data: {
          routes: {
            name: '::Create',
            requiredPolicy: StudentGroupPermission.Create
          } as ABP.Route
        },
      },
      {
        path: 'edit/:id',
        component: CreateOrUpdateStudentGroupComponent,
        data: {
          routes: {
            name: ':Information',
            requiredPolicy: StudentGroupPermission.Update
          } as ABP.Route
        },
      },
      {
        path: 'information/create/:studentGroupId',
        component: CreateEditStudentGroupInformationComponent,
        data: {
          routes: {
            name: ':Information',
            requiredPolicy: StudentGroupInformationPermission.Create
          } as ABP.Route
        },
      },
      {
        path: 'information/edit/:studentGroupId/:id',
        component: CreateEditStudentGroupInformationComponent,
        data: {
          routes: {
            name: ':Information',
            requiredPolicy: StudentGroupInformationPermission.Create
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

export class StudentRoutingModule {

}
