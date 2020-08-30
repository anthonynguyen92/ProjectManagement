import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student/student.component';
import { CreatOrEditStudentComponent } from './student/create-edit/create-edit-student.component';
import { StudentGroupComponent } from './student-group/student-group.component';
import { CreateOrUpdateStudentGroupComponent } from './student-group/create-edit/create-update-student-group.component';
import { StudentGroupInformationComponent } from './student-group/student-group-information/student-group-information.component';
import { CreateEditStudentGroupInformationComponent } from './student-group/student-group-information/create-update/create-update-student-group-information.component';

@NgModule({
  imports: [
    StudentRoutingModule,
    SharedModule,
  ],
  exports: [
    StudentRoutingModule,
  ],
  declarations: [
    StudentComponent,
    CreatOrEditStudentComponent,
    StudentGroupComponent,
    CreateOrUpdateStudentGroupComponent,
    StudentGroupInformationComponent,
    CreateEditStudentGroupInformationComponent
  ]
})

export class StudentModule {

}
