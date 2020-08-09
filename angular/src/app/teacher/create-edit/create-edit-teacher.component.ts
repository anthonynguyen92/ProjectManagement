import { Component, OnInit, Injector } from '@angular/core';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { TeacherService } from 'src/app/shared/services/teacher/services/intex';
import { CreateOrEditTeacherDto } from 'src/app/shared/services/teacher/models';

@Component({
  templateUrl: './create-edit-teacher.component.html',
  animations: [appModuleAnimation()]
})

export class CreateEditTeacherComponent extends AppBaseComponent implements OnInit {

  get id(): string {
    return this.getParamId('id');
  }
  public vm: CreateOrEditTeacherDto = new CreateOrEditTeacherDto();

  constructor(injector: Injector,
    private readonly _teacherService: TeacherService) {
    super(injector)
  }

  ngOnInit(): void {
    if (this.id) {
      this.title = "Teacher Information";
      this._teacherService.getById(this.id).subscribe(data => {
        this.vm = data;
      })
    }
    else {
      this.title = "Create Teacher";
    }
  }

  goBack() {
    this.redirect('teacher/management');
  }

  save() {
    if (this.vm) {
      this.setBusy();
      this._teacherService.saveByInput(this.vm).subscribe(() => {
        if (this.id) {
          this.notifySuccess('::UpdateSuccessfully');
        }
        else {
          this.notifySuccess(this.l('::CreateSuccessfully'));
        }
        this.goBack();
      }, () => {
        this.clearBusy();
      }, () => {
        this.clearBusy();
      })
    }
  }
}
