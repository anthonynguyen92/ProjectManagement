import { AppBaseComponent } from './../../shared/app.base.component';
import { Component, OnInit, Injector } from "@angular/core";
import { appModuleAnimation } from "../../shared/animations/routerTransition";
import { StudentService } from 'src/app/shared/services/student/services';
import { CreateUpdateStudentDto } from 'src/app/shared/services/student/models';

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
      this.title = "Student information";
      this._studentService.getById(this.Id).subscribe(data => {
        this.vm = data;
      })
    } else {
      this.title = "Add Student";
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
