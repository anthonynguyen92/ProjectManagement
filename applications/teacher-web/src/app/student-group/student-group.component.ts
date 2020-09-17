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

          const inputFilter = new GetStudentGroupForInputDto();
          inputFilter.filter = this.filter;
          inputFilter.maxResultCount = maxResutlCout;
          inputFilter.skipCount = skipCount;
          inputFilter.sorting = sorting;

          this._studentGroupService.getAllByList(inputFilter).subscribe(result => {
            callBack({
              data: result.items,
              recordsFiltered: result.totalCount,
              recordsTotal: result.totalCount,
            })
          }, () => this.clearBusy(), () => this.clearBusy())
        })
      },
      columns: [
        {
          title: this.l('ProjectManagement::Actions'),
          width: '100px',
          data: 'id',
          orderable: false,
          visible: this.getGrantedPolicy(StudentGroupPermission.Update)
            || this.getGrantedPolicy(StudentGroupPermission.Delete),
          render: () => {
            return this.renderButtonEditAndDelete(this.getGrantedPolicy(StudentGroupPermission.Update),
              this.getGrantedPolicy(StudentGroupPermission.Create));
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

          $('.btn-edit', row).unbind('click');
          $('.btn-edit', row).bind('click', () => {
            this.edit(data.id);
          });

          $('.btn-delete', row).unbind('click');
          $('.btn-delete', row).bind('click', () => {
            this.delete(data);
          });
        }
      }
    }
  }

  edit(id: string) {
    this.redirect(`student/group-student/edit/${id}`);
  }

  refresh() {
    this.studentGroup.reload();
  }

  delete(input: GetStudentGroupDto) {

  }

  keyPressFilter(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.refresh();
    }
  }

  create() {
    this.redirect('student/group-student/create');
  }

}
