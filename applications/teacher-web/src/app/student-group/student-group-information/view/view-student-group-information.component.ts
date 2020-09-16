import { Component, OnInit, Injector } from '@angular/core';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
import { CreateOrUpdateStudentGroupInformationDto } from 'src/app/shared/services/student/student-group-information/models';
import { StudentGroupInformationService } from 'src/app/shared/services/student/student-group-information/service';
import { StudentService } from 'src/app/shared/services/student/services';

@Component({
  templateUrl: './view-student-group-information.component.html',
  animations: [appModuleAnimation()]
})

export class ViewStudentGroupInformationComponent extends AppBaseComponent implements OnInit {

  get getStudentGroupId(): string {
    return this.getParamId('studentGroupId');
  }

  get id(): string {
    return this.getParamId('id');
  }

  public vm: CreateOrUpdateStudentGroupInformationDto = new CreateOrUpdateStudentGroupInformationDto();
  public studentCode: string;

  constructor(injector: Injector,
    private readonly _groupInformationService: StudentGroupInformationService) {
    super(injector);
  }

  ngOnInit() {
    this.title = "Information";
    this._groupInformationService.getById(this.id).subscribe(data => {
      this.vm = data;
    })

  }

  goBack() {
    this.redirect(`student/group-student/edit/${this.getStudentGroupId}`);
  }
}
