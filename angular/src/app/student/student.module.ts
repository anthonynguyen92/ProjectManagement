import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student/student.component';
import { CreatOrEditStudentComponent } from './student/create-edit/create-edit-student.component';
import { StudentGroupComponent } from './student-group/student-group.component';
import { CreateOrUpdateStudentGroupComponent } from './student-group/create-edit/create-update-student-group.component';

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
    CreateOrUpdateStudentGroupComponent
  ]
})

export class StudentModule {

}
