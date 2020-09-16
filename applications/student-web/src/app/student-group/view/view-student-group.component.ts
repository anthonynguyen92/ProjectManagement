import { Component, OnInit, Injector } from '@angular/core';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { CreateOrEditStudentGroupDto } from 'src/app/shared/services/student/student-group/models';
import { StudentGroupService } from 'src/app/shared/services/student/student-group/service';

@Component({
  templateUrl: './view-student-group.component.html',
  animations: [appModuleAnimation()]
})

export class ViewStudentGroupComponent extends AppBaseComponent implements OnInit {

  get id(): string {
    return this.getParamId('id');
  }

  public vm: CreateOrEditStudentGroupDto = new CreateOrEditStudentGroupDto();
  constructor(injector: Injector,
    private readonly _studentGroupService: StudentGroupService) {
    super(injector)
  }

  ngOnInit(): void {
    this.title = "StudentGroupInformation";
    this._studentGroupService.getById(this.id).subscribe(data => {
      this.vm = data;
    })

  }

  goBack() {
    this.redirect('student/group-student');
  }
}
