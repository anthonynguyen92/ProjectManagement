import { Component, Injector, OnInit } from '@angular/core';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { CreateUpdateProjectTaskDto } from 'src/app/shared/services/project/project-task/models';
import { ProjectTaskService } from 'src/app/shared/services/project/project-task/services';

@Component({
  templateUrl: './create-update-project-task.component.html'
})

export class CreateUpdateProjectTaskComponent extends AppBaseComponent implements OnInit {

  get id(): string {
    return this.getParamId('id');
  }

  // get project information id;

  public vm: CreateUpdateProjectTaskDto = new CreateUpdateProjectTaskDto();

  constructor(protected injector: Injector,
    private readonly _projectTaskService: ProjectTaskService) {
    super(injector);
  }


  ngOnInit() {
    if (this.id) {
      this.title = 'ProjectManagement::UpdateTask';
      this._projectTaskService.getById(this.id).subscribe(data => {
        this.vm = data;
      })
    }
    else {
      this.title = 'ProjectManagement::AddTask';
    }
  }

  goBack() {

  }

  save() {
    if (this.vm) {
      this.setBusy();
      // update project id
      this._projectTaskService.saveByInput(this.vm).subscribe(() => {
        if (this.id) {
          this.notifySuccess("ProjectManagement::UpdateSuccessfully")
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
