import { Component, OnInit, Injector } from '@angular/core';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { CreateOrEditStudentGroupDto } from 'src/app/shared/services/student/student-group/models';
import { StudentGroupService } from 'src/app/shared/services/student/student-group/service';

@Component({
  templateUrl: './create-update-student-group.component.html',
  animations: [appModuleAnimation()]
})

export class CreateOrUpdateStudentGroupComponent extends AppBaseComponent implements OnInit {

  get id(): string {
    return this.getParamId('id');
  }

  public vm: CreateOrEditStudentGroupDto = new CreateOrEditStudentGroupDto();
  constructor(injector: Injector,
    private readonly _studentGroupService: StudentGroupService) {
    super(injector)
  }



  ngOnInit(): void {
    if (this.id) {
      this.title = "Student Group Information";
      this._studentGroupService.getById(this.id).subscribe(data => {
        this.vm = data;
      })
    }
    else {
      this.title = "Create a Student Group";
    }
  }

  save() {
    if (this.vm) {
      this.setBusy();
      this._studentGroupService.saveByInput(this.vm).subscribe(() => {
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

  goBack() {
    this.redirect('student/group-student');
  }
}
