import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { StudentGroupComponent } from './student-group.component';
import { StudentGroupInformationComponent } from './student-group-information/student-group-information.component';
import { StudentGroupRoutingModule } from './sudent-group-routing.module';
import { CreateUpadteStudentGroupInformationComponent } from './student-group-information/create-edit/create-edit-student-group-information.component';
import { CreateOrUpdateStudentGroupComponent } from './create-update/create-update-student-group.component';

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
    CreateOrUpdateStudentGroupComponent,
    StudentGroupInformationComponent,
    CreateUpadteStudentGroupInformationComponent
  ]
})

export class StudentGroupModule {

}
