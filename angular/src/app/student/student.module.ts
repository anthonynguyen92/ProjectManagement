import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { StudentComponent } from './student.component';
import { CreatOrEditStudentComponent } from './create-edit/create-edit-student.component';
import { StudentRoutingModule } from './student-routing.module';

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