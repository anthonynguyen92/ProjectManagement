import { TeacherPermission } from '../shared/services/student/student-permission-name';
import { ABP } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { CreateEditTeacherComponent } from './create-edit/create-edit-teacher.component';

const routes = [
  {
    path: 'management',
    children: [
      {
        path: '',
        component: TeacherComponent,
        data: {
          routes: {
            name: '::TeacherPermission',
            requiredPolicy: TeacherPermission.Default
          } as ABP.Route
        },
      },
      {
        path: 'create',
        component: CreateEditTeacherComponent,
        data: {
          routes: {
            name: 'ProjcectManagement:Information',
            requiredPolicy: TeacherPermission.Create
          } as ABP.Route
        },
      },
      {
        path: 'edit/:id',
        component: CreateEditTeacherComponent,
        data: {
          routes: {
            name: 'ProjcectManagement:Information',
            requiredPolicy: TeacherPermission.Update
          } as ABP.Route
        },
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TeacherRoutingModule {

}
