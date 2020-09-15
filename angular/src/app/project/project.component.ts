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
  public readonly CreatePermission: string = ProjectPermission.Create;
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
          visible: this.getGrantedPolicy(ProjectPermission.Update) || (this.getGrantedPolicy(ProjectPermission.Delete)),
          render: (data, type, row) => {
            return this.renderButtonEditAndDelete(this.getGrantedPolicy(ProjectPermission.Update),
              this.getGrantedPolicy(ProjectPermission.Delete))
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

          $('.btn-edit', row).unbind('click');
          $('.btn-edit', row).bind('click', () => {
            this.edit(data.id);
          });

          $('.btn-delete', row).unbind('click');
          $('.btn-delete', row).bind('click', () => {
            this.delete(data);
          });

          $('.switch-status', row).unbind('click');
          $('.switch-status', row).bind('click', () => {
            this.toggleStatus(data.id);
          });
        }
      }
    }
  }

  edit(id: string) {
    this.redirect('project/list/edit/' + id);
  }

  create() {
    this.redirect('project/list/create');
  }

  toggleStatus(id: string) {
    this._projectService.toogletStatus(id).subscribe(() => {
      this.notifySuccess('ProjectManagement::UpdateSuccessfully');
      this.refresh();
    })
  }

  delete(input: GetProjectDto) {
    this.confirmationPopup(this.l('::WillBeDelete') + ' ' + input.projectName,
      this.l('::AreYouSure'), () => {
        this._projectService.deleteByid(input.id).subscribe(() => {
          this.notifySuccess('ProjectManagement::DeleteSuccessfully');
          this.refresh();
        })
      })
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
