import { Component, OnInit, Injector } from '@angular/core';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
import { CreateOrUpdateStudentGroupInformationDto } from 'src/app/shared/services/student/student-group-information/models';
import { StudentGroupInformationService } from 'src/app/shared/services/student/student-group-information/service';
import { StudentService } from 'src/app/shared/services/student/services';
import { StudentGroupInformationPermission } from 'src/app/shared/services/student/student-permission-name';

@Component({
  templateUrl: './create-update-student-group-information.component.html',
  animations: [appModuleAnimation()]
})

export class CreateEditStudentGroupInformationComponent extends AppBaseComponent implements OnInit {

  get getStudentGroupId(): string {
    return this.getParamId('studentGroupId');
  }

  get id(): string {
    return this.getParamId('id');
  }

  public vm: CreateOrUpdateStudentGroupInformationDto = new CreateOrUpdateStudentGroupInformationDto();
  public studentCode: string;
  public isHidenStudent: boolean;
  public isHidenInformation: boolean;

  constructor(injector: Injector,
    private readonly _groupInformationService: StudentGroupInformationService,
    private readonly _studentService: StudentService) {
    super(injector);
  }

  ngOnInit() {
    if (this.id) {
      this.title = "Information";
      this._groupInformationService.getById(this.id).subscribe(data => {
        this.vm = data;
        this.isHidenStudent = false;
        this.isHidenInformation = true;
      })
    }
    else {
      this.title = "Create";
      this.vm.studentGroupId = this.getStudentGroupId;
      this.isHidenStudent = true;
      this.isHidenInformation = false;
    }
  }

  goBack() {
    this.redirect(`student/group-student/edit/${this.getStudentGroupId}`);
  }


  // fix save
  save() {
    if (this.vm) {
      this.setBusy();
      if (this.id) {
        this.vm.studentGroupId = this.getStudentGroupId;
        this._groupInformationService.saveByInput(this.vm).subscribe(() => {
          if (this.id) {
            this.notifySuccess('ProjectManagement::UpdateSuccessfully');
          }
          this.goBack();
        }, () => {
          this.clearBusy();
        }, () => {
          this.clearBusy();
        })
      }
      else {
        this._studentService.getByCode(this.studentCode).subscribe(data => {
          if (data) {
            this.vm.studentId = data.id;
            this.vm.studentName = data.name;
            this.vm.studentGroupId = this.getStudentGroupId;
            this._groupInformationService.saveByInput(this.vm).subscribe(() => {

              this.notifySuccess(this.l('ProjectManagement::CreateSuccessfully'));
              this.goBack();
            }, () => {
              this.clearBusy();
            }, () => {
              this.clearBusy();
            })
          }
          else {
            this.notifyError('ProjectManagement::StudentCodeDoesntNotExists');
            this.goBack()
          }
        })
      }
    }
  }
}
