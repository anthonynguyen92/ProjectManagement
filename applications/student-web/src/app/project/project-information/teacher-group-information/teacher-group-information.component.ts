import { Component, Injector, Input, OnInit, ViewChild } from '@angular/core';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { DataTablesOptions, FtDatatablesComponent } from 'src/app/shared/components/ft-table/ft-datatable.component';
import { TeacherInformationGroupPermission } from 'src/app/shared/services/student/student-permission-name';
import { GetTeacherInformationGroupDto, GetTeacherInformationGroupForInputDto } from 'src/app/shared/services/teacher/teacher-information-group/models';
import { TeacherInformationGroupService } from 'src/app/shared/services/teacher/teacher-information-group/services';

@Component({
  selector: 'ft-teacher-information-group',
  templateUrl: './teacher-group-information.component.html',
  animations: [appModuleAnimation()]
})

export class TeacherInformationGroupComponent extends AppBaseComponent implements OnInit {

  get id(): string {
    return this.getParamId('id');
  }
  get pId(): string {
    return this.getParamId('projectId');
  }

  @Input('ProjectInformationId') public ProjectInformationId: string;
  @Input('projectId') public projectId: String;
  @ViewChild('teacherInformationGroup', { static: false }) public teacherInformationGroup: FtDatatablesComponent;
  public dtOptions: DataTablesOptions;
  public filter: string;

  constructor(injector: Injector,
    private readonly _teacherInformationGroupService: TeacherInformationGroupService) {
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
        const inputFilter = new GetTeacherInformationGroupForInputDto();
        inputFilter.filter = this.filter;
        inputFilter.projectInformationId = this.id;
        inputFilter.maxResultCount = maxResultCount;
        inputFilter.skipCount = skipCount;
        inputFilter.sorting = sorting;

        this._teacherInformationGroupService.getListByPaged(inputFilter).subscribe(result => {
          callBack({
            data: result.items,
            recordsFiltered: result.totalCount,
            recordsTotal: result.totalCount
          })
        }, () => this.clearBusy(), () => this.clearBusy())

      },
      columns: [
        {
          title: this.l('ProjectManagement::TeacherName'),
          data: 'teacherName',
        },
        {
          title: this.l('ProjectManagement::Roles'),
          data: 'roles'
        },
        {
          title: this.l('ProjectManagement::Description'),
          data: 'description',
        }
      ],
      rowCallback: (row: Node, data: GetTeacherInformationGroupDto, index: number) => {

      }
    }
  }

  refresh() {
    this.teacherInformationGroup.reload();
  }

  keyPressFilter(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.refresh();
    }
  }

}
