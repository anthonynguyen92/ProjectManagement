import { Component, OnInit, Injector } from "@angular/core";
import { StudentService } from 'src/app/shared/services/student/services';
import { CreateUpdateStudentDto } from 'src/app/shared/services/student/models';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';

@Component({
  templateUrl: './create-edit-student.component.html',
  animations: [appModuleAnimation()],
})
export class CreatOrEditStudentComponent extends AppBaseComponent implements OnInit {

  get Id(): string {
    return this.getParamId('id');
  }

  public vm: CreateUpdateStudentDto = new CreateUpdateStudentDto();

  constructor(protected injector: Injector,
    private readonly _studentService: StudentService) {
    super(injector);
  }

  ngOnInit(): void {
    if (this.Id) {
      this.title = "StudentInformation";
      this._studentService.getById(this.Id).subscribe(data => {
        this.vm = data;
      })
    } else {
      this.title = "AddStudent";
    }
  }

  goBack() {
    this.redirect('student/management');
  }

  save() {
    if (this.vm) {
      this.setBusy();
      this._studentService.saveByInput(this.vm).subscribe(() => {
        if (this.Id) {
          this.notifySuccess('ProjectManagement::UpdateSuccessfully');
        }
        else {
          this.notifySuccess(this.l('ProjectManagement::CreateSuccessfully'));
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
