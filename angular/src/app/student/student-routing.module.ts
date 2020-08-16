
import { StudentPermission } from '../shared/services/student/student-permission-name';
import { ABP } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreatOrEditStudentComponent } from './student/create-edit/create-edit-student.component';
import { StudentComponent } from './student/student.component';

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
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class StudentRoutingModule {

}
