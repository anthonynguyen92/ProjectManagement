import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student/student.component';
import { CreatOrEditStudentComponent } from './student/create-edit/create-edit-student.component';

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
    CreatOrEditStudentComponent
  ]
})

export class StudentModule {

}
