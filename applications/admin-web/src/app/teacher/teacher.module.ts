import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CreateEditTeacherComponent } from './create-edit/create-edit-teacher.component';
import { TeacherComponent } from './teacher.component';
import { TeacherRoutingModule } from './teacher-routing.module';

@NgModule({
  imports: [TeacherRoutingModule, SharedModule],
  exports: [TeacherRoutingModule],
  declarations: [TeacherComponent, CreateEditTeacherComponent],
})
export class TeacherModule { }
