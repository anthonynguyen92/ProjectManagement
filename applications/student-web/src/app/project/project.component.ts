import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { appModuleAnimation } from '../shared/animations/routerTransition';
import { AppBaseComponent } from '../shared/app.base.component';
import { DataTablesOptions, FtDatatablesComponent } from '../shared/components/ft-table/ft-datatable.component';
import { ProjectPermission } from '../shared/services/project/project-permission-name';
import { GetProjectDto, GetProjectForInputDto } from '../shared/services/project/project/models';
import { ProjectService } from '../shared/services/project/project/services';

@Component({
  templateUrl: './project.component.html',
  animations: [appModuleAnimation()]
})

export class ProjectComponent extends AppBaseComponent implements OnInit {

  public filter: string;
  public dtOptions: DataTablesOptions;
  @ViewChild('project', { static: false }) project: FtDatatablesComponent;

  constructor(injector: Injector,
    private readonly _projectService: ProjectService) {
    super(injector)
  }

  ngOnInit(): void {
    this.dtOptions = {
      scrollX: true,
      responsive: false,
      paging: true,
      serverSide: true,
      processing: false,
      ajaxFunction: (sorting, skipCount, maxResultCount, callBack) => {
        const inputFilter = new GetProjectForInputDto();
        inputFilter.filter = this.filter;
        inputFilter.maxResultCount = maxResultCount;
        inputFilter.skipCount = skipCount;
        inputFilter.sorting = sorting;

        this._projectService.getListByPage(inputFilter).subscribe(result => {
          callBack({
            data: result.items,
            recordsTotal: result.totalCount,
            recordsFiltered: result.totalCount
          })
        }, () => this.clearBusy(), () => this.clearBusy())
      },
      columns: [
        {
          title: this.l('ProjectManagement::Actions'),
          width: '150px',
          data: 'id',
          orderable: false,
          render: () => {
            return this.renderButtonView(this.getGrantedPolicy(ProjectPermission.Default));
          }
        },
        {
          title: this.l('ProjectManagement::ProjectName'),
          data: 'projectName'
        },
        {
          title: this.l('ProjectManagement::ProjectType'),
          data: 'type'
        },
        {
          title: this.l('ProjectManagement::LevelOfProject'),
          data: 'level'
        },
        {
          title: this.l('ProjectManagement::NumberOfTeamRegiste'),
          data: 'numberOfTeamRegister',
        },
        {
          title: this.l('ProjectManagement::LimitSubscriptions'),
          data: 'limitSubscriptions'
        },
        {
          title: this.l('::Status'),
          data: 'status',
          render: (data) => {
            return this.renderStatusToggle(data, !this.getGrantedPolicy(ProjectPermission.Update))
          }
        }
      ],
      rowCallback: (row: Node, data: GetProjectDto, index: number) => {
        if (data) {

          $('.btn-view', row).unbind('click');
          $('.btn-view', row).bind('click', () => {
            this.view(data.id);
          });
        }
      }
    }
  }

  view(id: string) {
    this.redirect('project/list/edit/' + id);
  }

  refresh() {
    this.project.reload();
  }

  keyPressFilter(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.refresh();
    }

  }
}
