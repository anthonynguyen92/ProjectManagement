import { Component, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { DataTablesOptions, FtDatatablesComponent } from 'src/app/shared/components/ft-table/ft-datatable.component';
import { ProjectTaskPermission } from 'src/app/shared/services/project/project-permission-name';
import { GetProjectTaskDto, GetProjectTaskForInputDto } from 'src/app/shared/services/project/project-task/models';
import { ProjectTaskService } from 'src/app/shared/services/project/project-task/services';

@Component({
  selector: 'ft-project-task',
  templateUrl: './project-task.component.html',
  animations: [appModuleAnimation()]
})

export class ProjectTaskComponent extends AppBaseComponent implements OnInit {

  get id(): string {
    return this.getParamId('id');
  }
  get pId(): string {
    return this.getParamId('projectId');
  }

  public readonly CreatePermission = ProjectTaskPermission.Create;

  @Input('ProjectInformationId') public ProjectInformationId: string;
  @ViewChild('projectTask', { static: false }) public projectTask: FtDatatablesComponent;
  public dtOptions: DataTablesOptions;
  filter: string;

  constructor(protected readonly injector: Injector,
    private readonly _projectTaskService: ProjectTaskService) {
    super(injector);
  }

  ngOnInit(): void {
    this.dtOptions = {
      scrollX: true,
      responsive: false,
      paging: true,
      serverSide: true,
      processing: false,
      ajaxFunction: (sorting, skipCount, maxResultCount, callBack) => {
        const inputFilter = new GetProjectTaskForInputDto();
        inputFilter.filter = this.filter;
        inputFilter.projectInformationId = this.id;
        inputFilter.maxResultCount = maxResultCount;
        inputFilter.skipCount = skipCount;
        inputFilter.sorting = sorting;

        this._projectTaskService.getListByPaged(inputFilter).subscribe(result => {
          callBack({
            data: result.items,
            recordsFiltered: result.totalCount,
            recordsTotal: result.totalCount
          })
        }, () => this.clearBusy(), () => this.clearBusy())

      },
      columns: [
        {
          title: this.l('ProjectManagement::Actions'),
          width: '150px',
          data: 'id',
          orderable: false,
          visible: this.getGrantedPolicy(ProjectTaskPermission.Delete) || this.getGrantedPolicy(ProjectTaskPermission.Update),
          render: (data, type, row) => {
            return this.renderButtonEditAndDelete(this.getGrantedPolicy(ProjectTaskPermission.Update), this.getGrantedPolicy(ProjectTaskPermission.Delete));
          }
        },
        {
          title: this.l('ProjectManagement::TaskName'),
          data: 'name',
        },
        {
          title: this.l('ProjectManagement::Descriptions'),
          data: 'descriptions'
        },
        {
          title: this.l('ProjectManagement::TaskType'),
          data: 'type',
        },
        {
          title: this.l('ProjectManagement::Bonus'),
          data: 'bonus',
        },
        {
          title: this.l('ProjectManagement::ByTeacher'),
          data: 'teacherName'
        }
      ],
      rowCallback: (row: Node, data: GetProjectTaskDto, index: number) => {
        $('.btn-edit', row).unbind('click');
        $('.btn-edit', row).bind('click', () => {
          this.edit(data);
        })

        $('.btn-delete', row).unbind('click');
        $('.btn-delete', row).bind('click', () => {
          this.delete(data);
        });
      }
    }
  }

  delete(input: GetProjectTaskDto) {
    this.confirmationPopup(this.l('::WillBeDelete') + ' ' + input.name,
      this.l('ProjectManagement::AreYouSure'), () => {
        this._projectTaskService.deleteById(input.id).subscribe(() => {
          this.notifySuccess('ProjectManagement::DeleteSuccessfully');
          this.refresh();
        })
      })
  }

  edit(data: GetProjectTaskDto) {

  }

  refresh() {
    this.projectTask.reload();
  }

  create() {
    //this.redirect(`project/list/teacher/create/${this.id}/${this.pId}`);
  }

  keyPressFilter(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.refresh();
    }
  }
}
