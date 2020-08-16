import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
import { StudentGroupService } from 'src/app/shared/services/student/student-group/service';
import { FtDatatablesComponent, DataTablesOptions } from 'src/app/shared/components/ft-table/ft-datatable.component';
import { GetStudentGroupForInputDto, GetStudentGroupDto } from 'src/app/shared/services/student/student-group/models';
import { StudentGroupPermission } from 'src/app/shared/services/student/student-permission-name';

@Component({
  templateUrl: './student-group.component.html',
  animations: [appModuleAnimation()]
})

export class StudentGroupComponent extends AppBaseComponent implements OnInit {

  public dtOptions: DataTablesOptions;
  @ViewChild('studentGroup', { static: false }) public studentGroup: FtDatatablesComponent;
  public readonly creatingPermission: string = StudentGroupPermission.Create;
  public filter: string;

  constructor(injector: Injector,
    private readonly _studentGroupService: StudentGroupService) {
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
        const inputFilter = new GetStudentGroupForInputDto();
        inputFilter.filter = this.filter;
        inputFilter.maxResultCount = maxResutlCout;
        inputFilter.skipCount = skipCount;
        inputFilter.sorting = sorting;

        this._studentGroupService.getAllByList(inputFilter).subscribe(result => {
          callBack({
            data: result.items,
            recordsFiltered: result.totalCount,
            recordsTotal: result.totalCount
          });
        }, () => this.clearBusy(), () => this.clearBusy())
      },
      columns: [
        {
          title: this.l('::Actions'),
          width: '150px',
          data: 'id',
          orderable: false,
          visible: this.getGrantedPolicy(StudentGroupPermission.Update) || (this.getGrantedPolicy(StudentGroupPermission.Delete)),
          render: (data, type, row) => {
            return this.renderButtonEditAndDelete(this.getGrantedPolicy(StudentGroupPermission.Update), this.getGrantedPolicy(StudentGroupPermission.Delete))
          }
        },
        {
          title: this.l('::GroupName'),
          data: 'groupName'
        },
        {
          title: this.l('::NumberOfMember'),
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

  delete(input: GetStudentGroupDto) {
    this.confirmationPopup(this.l('::WillBeDelete') + ' ' + input.groupName,
      this.l('::AreYouSure'), () => {
        this._studentGroupService.deleteById(input.id).subscribe(() => {
          this.notifySuccess('::DeleteSuccessfully');
          this.refresh();
        })
      }
    )
  }

  create() {
    this.redirect('student/group-student/create');
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
