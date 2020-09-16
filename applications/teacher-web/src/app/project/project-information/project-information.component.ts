import { Component, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { DataTablesOptions, FtDatatablesComponent } from 'src/app/shared/components/ft-table/ft-datatable.component';
import { GetProjectInformationDto, GetProjectInformationForinputDto } from 'src/app/shared/services/project/project-information/models';
import { ProjectInformationService } from 'src/app/shared/services/project/project-information/services/project-information.service';
import { ProjectInformationPermission } from 'src/app/shared/services/project/project-permission-name';
import * as moment from 'moment';
@Component({
  selector: 'ft-project-information',
  templateUrl: './project-information.component.html',
  animations: [appModuleAnimation()]
})

export class ProjectInformationComponent extends AppBaseComponent implements OnInit {

  get id(): string {
    return this.getParamId('id');
  }

  @ViewChild('projectInformation', { static: false }) projectInformation: FtDatatablesComponent;
  @Input() public projectId: string;

  public readonly CreatePermission = ProjectInformationPermission.Create;
  public dtOptions: DataTablesOptions;
  public filter: string;

  constructor(injector: Injector,
    private readonly _projectInformationService: ProjectInformationService) {
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
        const inputFilter = new GetProjectInformationForinputDto();
        inputFilter.filter = this.filter;
        inputFilter.maxResultCount = maxResultCount;
        inputFilter.projectId = this.id;
        inputFilter.skipCount = skipCount;
        inputFilter.sorting = sorting;
        this._projectInformationService.getListBypaged(inputFilter).subscribe(result => {
          callBack({
            data: result.items,
            recordsFiltered: result.totalCount,
            recordsTotal: result.totalCount,
          })
        }, () => this.clearBusy(), () => this.clearBusy())
      },
      columns: [
        {
          title: this.l('::Actions'),
          width: '150px',
          data: 'id',
          orderable: false,
          visible: this.getGrantedPolicy(ProjectInformationPermission.Default),
          render: () => {
            return this.renderButtonView(this.getGrantedPolicy(ProjectInformationPermission.Default))
          }
        },
        {
          title: this.l('ProjectManagement::ProjectName'),
          data: 'projectName'
        },
        {
          title: this.l('ProjectManagement::StudentGroupName'),
          data: 'studentGroupName'
        },
        {
          title: this.l('ProjectManagement::StartDate'),
          data: 'startDate',
          render: (data) => {
            if (!data) return '';
            return moment(data).format('DD-MM-YYYY');
          }
        },
        {
          title: this.l('ProjectManagement::ExpireDate'),
          data: 'expiredDate',
          render: (data) => {
            if (!data) return '';
            return moment(data).format('DD-MM-YYYY');
          }
        },
        {
          title: this.l('ProjectManagement::Status'),
          data: 'status',
          render: (data) => {
            return this.renderStatusToggle(data, !this.getGrantedPolicy(ProjectInformationPermission.Update))
          }
        }
      ],
      rowCallback: (row: Node, data: GetProjectInformationDto, index: number) => {
        if (data) {

          $('.btn-view', row).unbind('click');
          $('.btn-view', row).bind('click', () => {
            this.view(data.id);
          });
        }
      }
    }
  }

  view(idInfor: string) {
    this.redirect(`project/list/information/edit/${this.id}/${idInfor}`);
  }

  toggleStatus(id: string) {
    this._projectInformationService.toggleStatus(id).subscribe(() => {
      this.notifySuccess('ProjectManagement::UpdateSuccessfully');
      this.refresh();
    })
  }

  goBack() {
    this.redirect(`project/list/edit/${this.id}`);
  }

  refresh() {
    this.projectInformation.reload();
  }

  keyPressFilter(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.refresh();
    }

  }
}
