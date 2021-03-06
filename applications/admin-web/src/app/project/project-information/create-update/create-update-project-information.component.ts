import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { CreateUpdateProjectInformationDto } from 'src/app/shared/services/project/project-information/models';
import { ProjectInformationService } from 'src/app/shared/services/project/project-information/services/project-information.service';
import { ProjectService } from 'src/app/shared/services/project/project/services';
import { GetStudentGroupDto } from 'src/app/shared/services/student/student-group/models';
import { StudentGroupService } from 'src/app/shared/services/student/student-group/service';

@Component({
  templateUrl: './create-update-project-information.component.html',
  animations: [appModuleAnimation()],
})

export class CreateUpdateProjectInformationComponent extends AppBaseComponent implements OnInit {

  get id(): string {
    return this.getParamId('id');
  }

  get projectId(): string {
    return this.getParamId('projectId');
  }

  public vm: CreateUpdateProjectInformationDto = new CreateUpdateProjectInformationDto();
  public studentGroups: GetStudentGroupDto[] = [];
  public studentGroup: GetStudentGroupDto = new GetStudentGroupDto();
  public titleSelect = 'PickUpone';

  constructor(injector: Injector,
    private readonly _projectInformationService: ProjectInformationService,
    private readonly _studentGroupService: StudentGroupService,
    private readonly _projectService: ProjectService) {
    super(injector)
  }

  ngOnInit(): void {
    this._studentGroupService.getListGroupOfStudentnotRegister().subscribe(data => {
      this.studentGroups = data;
    })
    this._projectService.getbyId(this.projectId).subscribe(project => {
      this.vm.projectId = project.id;
      this.vm.projectName = project.projectName;
    })
    if (this.id) {
      this.title = "InformationProjectStudent";
      this._projectInformationService.getById(this.id).subscribe(data => {
        this.vm = data;

        this.studentGroup = this.studentGroups.find(x => {
          x.id === this.vm.studentGroupId
        });

      })
    }
    else {
      this.title = "AddAGroupStudent"
    }
  }

  goBack() {
    this.redirect('project/list/edit/' + this.projectId);
  }

  save() {
    this.setBusy();
    this.vm.studentGroupId = this.studentGroup.id;
    this.vm.studentGroupName = this.studentGroup.groupName;
    this._projectInformationService.saveByInput(this.vm).subscribe(() => {
      if (this.id) {
        this.notifySuccess("ProjectManagement::UpdateSuccessfully")
      }
      else {
        this.notifySuccess(this.l('ProjectManagement::CreateSuccessfully'));
      }
      this.goBack();
    }, () => this.clearBusy(), () => this.clearBusy())
  }
}
