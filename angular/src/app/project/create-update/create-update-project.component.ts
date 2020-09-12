import { Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { CreateOrUpdateProjectDto, Level, ProjectType } from 'src/app/shared/services/project/project/models';
import { ProjectService } from 'src/app/shared/services/project/project/services';

@Component({
  templateUrl: './create-update-project.component.html',
  animations: [appModuleAnimation()]
})

export class CreateUpdateProjectComponent extends AppBaseComponent implements OnInit {

  get id(): string {
    return this.getParamId('id');
  }

  public vm: CreateOrUpdateProjectDto = new CreateOrUpdateProjectDto();

  public listLevel: number[] = [];
  public listType: number[] = [];
  constructor(injector: Injector,
    private readonly _projectService: ProjectService) {
    super(injector)
  }

  ngOnInit(): void {
    for (const item in ProjectType) {
      if (!isNaN(parseInt(item))) {
        this.listType.push(parseInt(item));
      }
    }

    for (const item in Level) {
      if (!isNaN(parseInt(item))) {
        this.listLevel.push(parseInt(item));
      }
    }

    if (this.id) {
      this.title = "Project Type Infor"
      this._projectService.getbyId(this.id).subscribe(data => {
        this.vm = data;
      })
    }
    else {
      this.title = "Create Project";
    }
  }

  save() {
    if (this.vm) {
      this.setBusy();
      this._projectService.saveById(this.vm).subscribe(() => {
        if (this.id) {
          this.notifySuccess("::UpdateSuccessfully")
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
    this.redirect('project/list');
  }
}

