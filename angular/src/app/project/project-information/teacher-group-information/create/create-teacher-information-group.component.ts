import { Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { GetTeacherDto } from 'src/app/shared/services/teacher/models';
import { TeacherService } from 'src/app/shared/services/teacher/services/intex';
import { CreateUpdateTeacherInformationGroupDto } from 'src/app/shared/services/teacher/teacher-information-group/models';
import { TeacherInformationGroupService } from 'src/app/shared/services/teacher/teacher-information-group/services';

@Component({
  templateUrl: './create-teacher-information-group.component.html',
  animations: [appModuleAnimation()]
})

export class CreateTeacherInformationGroupComponent extends AppBaseComponent implements OnInit {

  get id(): string {
    return this.getParamId('id');
  }
  get projectId(): string {
    return this.getParamId('projectId');
  }

  public vm: CreateUpdateTeacherInformationGroupDto = new CreateUpdateTeacherInformationGroupDto();
  public listTeacher: GetTeacherDto[] = [];
  public teacher: GetTeacherDto = new GetTeacherDto();

  constructor(injector: Injector,
    private readonly _teacherService: TeacherService,
    private readonly _teacherInformationService: TeacherInformationGroupService) {
    super(injector)
  }

  ngOnInit(): void {
    console.log(this.id + ": id");
    console.log(this.projectId + ": projectId")
    this.title = 'AddTeacher';
    this._teacherService.getListTeacher(this.id).subscribe(data => {
      this.listTeacher = data;
    })
  }



  save() {
    this.setBusy();
    this.vm.projectInformationId = this.id;
    this.vm.teacherName = this.teacher.name;
    this.vm.teacherId = this.teacher.id;
    console.log(this.vm)
    this._teacherInformationService.saveByInput(this.vm).subscribe(() => {
      this.notifySuccess("::CreateSuccessfully")
      this.goBack();
    }, () => this.clearBusy(), () => this.clearBusy())
  }

  goBack() {
    this.redirect(`project/list/information/edit/${this.projectId}/${this.id}`);
  }

}
