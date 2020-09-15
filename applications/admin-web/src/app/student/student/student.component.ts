
import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { DataTablesOptions, FtDatatablesComponent } from 'src/app/shared/components/ft-table/ft-datatable.component';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
import { StudentPermission } from 'src/app/shared/services/student/student-permission-name';
import { StudentService } from 'src/app/shared/services/student/services';
import { GetStudentInputDto, GetStudentDto } from 'src/app/shared/services/student/models';

@Component({
  animations: [appModuleAnimation()],
  templateUrl: './student.component.html',
})

export class StudentComponent extends AppBaseComponent implements OnInit {

  public dtOption: DataTablesOptions;
  public readonly creatingPermission: string = StudentPermission.Create;

  @ViewChild('studentManagement', { static: false }) public studentManagement: FtDatatablesComponent;

  public filter: string;

  constructor(protected readonly injector: Injector,
    private readonly _studentService: StudentService) {
    super(injector);
  }



  ngOnInit(): void {
    this.dtOption = {
      scrollX: true,
      responsive: false,
      paging: true,
      serverSide: true,
      processing: false,
      ajaxFunction: (sorting, skipCount, maxResultCount, callBack) => {
        const inputFilter = new GetStudentInputDto();
        inputFilter.filter = this.filter;
        inputFilter.maxResultCount = maxResultCount;
        inputFilter.skipCount = skipCount;
        inputFilter.sorting = sorting;

        this._studentService.getListPagedByInput(inputFilter).subscribe(result => {
          callBack({
            data: result.items,
            recordsTotal: result.totalCount,
            recordsFiltered: result.totalCount,
          })
        }, () => this.clearBusy(), () => this.clearBusy())
      },
      columns: [
        {
          title: this.l('ProjectManagement::Actions'),
          width: '150px',
          data: 'id',
          orderable: false,
          visible: this.getGrantedPolicy(StudentPermission.Update) || (this.getGrantedPolicy(StudentPermission.Delete)),
          render: (data, type, row) => {
            return this.renderButtonEditAndDelete(this.getGrantedPolicy(StudentPermission.Update), this.getGrantedPolicy(StudentPermission.Delete))
          }
        },
        {
          title: this.l('ProjectManagement::StudentName'),
          data: 'name',
        },
        {
          title: this.l('ProjectManagement::Faculty'),
          data: 'faculty',
        },
        {
          title: this.l('ProjectManagement::Branch'),
          data: 'branch',
        },
        {
          title: this.l('ProjectManagement::CourseYear'),
          data: 'courseYear',
        }
      ],
      rowCallback: (row: Node, data: GetStudentDto, index: number) => {
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
    this.redirect('student/management/edit/' + id);
  }

  create() {
    this.redirect('student/management/create');
  }

  delete(input: GetStudentDto) {
    this.confirmationPopup(this.l('::WillBeDelete') + ' ' + input.name,
      this.l('ProjectManagement::AreYouSure'), () => {
        this._studentService.deleteById(input.id).subscribe(() => {
          this.notifySuccess('ProjectManagement::DeleteSuccessfully');
          this.refresh();
        })
      })
  }

  refresh() {
    this.studentManagement.reload();
  }

  keyPressFilter(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.refresh();
    }
  }
}
