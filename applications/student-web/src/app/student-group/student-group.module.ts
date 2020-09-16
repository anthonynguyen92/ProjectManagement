import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { StudentGroupComponent } from './student-group,component';
import { StudentGroupInformationComponent } from './student-group-information/student-group-information.component';
import { ViewStudentGroupInformationComponent } from './student-group-information/view/view-student-group-information.component';
import { StudentGroupRoutingModule } from './sudent-group-routing.module';
import { ViewStudentGroupComponent } from './view/view-student-group.component';

@NgModule({
  imports: [
    StudentGroupRoutingModule,
    SharedModule,
  ],
  exports: [
    StudentGroupRoutingModule,
  ],
  declarations: [
    StudentGroupComponent,
    ViewStudentGroupComponent,
    StudentGroupInformationComponent,
    ViewStudentGroupInformationComponent
  ]
})

export class StudentGroupModule {

}
