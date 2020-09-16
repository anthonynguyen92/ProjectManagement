import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
import { StudentGroupService } from 'src/app/shared/services/student/student-group/service';
import { FtDatatablesComponent, DataTablesOptions } from 'src/app/shared/components/ft-table/ft-datatable.component';
import { GetStudentGroupDto, GetStudentGroupForInputDto } from 'src/app/shared/services/student/student-group/models';
import { StudentGroupPermission } from 'src/app/shared/services/student/student-permission-name';
import { StudentService } from '../shared/services/student/services';
import { GetStudentGroupForUx } from '../shared/services/student/student-group/models/student-group-for-ux';

@Component({
  templateUrl: './student-group.component.html',
  animations: [appModuleAnimation()]
})

export class StudentGroupComponent extends AppBaseComponent implements OnInit {

  public dtOptions: DataTablesOptions;
  public readonly creatingPermission: string = StudentGroupPermission.Create;
  public filter: string;

  @ViewChild('studentGroup', { static: false }) public studentGroup: FtDatatablesComponent;

  constructor(injector: Injector,
    private readonly _studentGroupService: StudentGroupService,
    private readonly _studentService: StudentService) {
    super(injector);
  }

  ngOnInit(): void {
    this.dtOptions = {
      scrollX: true,
      responsive: false,
      paging: true,
      serverSide: true,
      processing: false,
      ajaxFunction: (sorting, skipCount, maxResutlCout, callBack) => {

        this._studentService.getCurrentUser().subscribe(data => {
          const inputFilter = new GetStudentGroupForUx();
          inputFilter.filter = this.filter;
          inputFilter.maxResultCount = maxResutlCout;
          inputFilter.skipCount = skipCount;
          inputFilter.sorting = sorting;
          inputFilter.studentId = data.id;
          this._studentGroupService.getGroupOfStudent(inputFilter).subscribe(result => {
            callBack({
              data: result,
              recordsFiltered: result.totalCount,
              recordsTotal: result.totalCount
            });
          }, () => this.clearBusy(), () => this.clearBusy())
        })
      },
      columns: [
        {
          title: this.l('ProjectManagement::Actions'),
          width: '100px',
          data: 'id',
          orderable: false,
          visible: this.getGrantedPolicy(StudentGroupPermission.Default),
          render: () => {
            return this.renderButtonView(this.getGrantedPolicy(StudentGroupPermission.Default));
          }
        },
        {
          title: this.l('ProjectManagement::GroupName'),
          data: 'groupName'
        },
        {
          title: this.l('ProjectManagement::NumberOfMember'),
          data: 'numberOfMenber'
        }
      ],
      rowCallback: (row: Node, data: GetStudentGroupDto, index: number) => {
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
    this.redirect(`student/group-student/edit/${id}`);
  }

  refresh() {
    this.studentGroup.reload();
  }

  keyPressFilter(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.refresh();
    }
  }

}
