import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { appModuleAnimation } from '../shared/animations/routerTransition';
import { AppBaseComponent } from '../shared/app.base.component';
import { TeacherService } from '../shared/services/teacher/services/intex';
import { TeacherPermission } from '../shared/services/student/student-permission-name';
import { DataTablesOptions, FtDatatablesComponent } from '../shared/components/ft-table/ft-datatable.component';
import { GetTeacherInputDto, GetTeacherDto } from '../shared/services/teacher/models';

@Component({
  templateUrl: './teacher.component.html',
  animations: [appModuleAnimation()]
})

export class TeacherComponent extends AppBaseComponent implements OnInit {

  public filter: string;
  public dtOption: DataTablesOptions;
  public readonly creatingPermission: string = TeacherPermission.Create;
  @ViewChild('teacherManagement', { static: false }) public teacherManagement: FtDatatablesComponent;

  constructor(protected injector: Injector,
    private readonly _teacherService: TeacherService) {
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
        const inputFilter = new GetTeacherInputDto();
        inputFilter.filter = this.filter;
        inputFilter.maxResultCount = maxResultCount;
        inputFilter.skipCount = skipCount;
        inputFilter.sorting = sorting;

        this._teacherService.getListPagedByInput(inputFilter).subscribe(result => {
          callBack({
            data: result.items,
            recordsTotal: result.totalCount,
            recordsFiltered: result.totalCount,
          })
        }, () => this.clearBusy(), () => this.clearBusy())
      },
      columns: [
        {
          title: this.l('::Actions'),
          width: '150px',
          data: 'id',
          orderable: false,
          visible: this.getGrantedPolicy(TeacherPermission.Update) || (this.getGrantedPolicy(TeacherPermission.Delete)),
          render: (data, type, row) => {
            return this.renderButtonEditAndDelete(this.getGrantedPolicy(TeacherPermission.Update), this.getGrantedPolicy(TeacherPermission.Delete))
          }
        },
        {
          title: this.l('::Name'),
          data: 'name',
        },
        {
          title: this.l('::Faculty'),
          data: 'faculty',
        },
      ],
      rowCallback: (row: Node, data: GetTeacherDto, index: number) => {
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
    this.redirect('teacher/management/edit/' + id);
  }

  create() {
    this.redirect('teacher/management/create');
  }

  delete(input: GetTeacherDto) {
    this.confirmationPopup(this.l('::WillBeDelete') + ' ' + input.name,
      this.l('::AreYouSure'), () => {
        this._teacherService.deleteById(input.id).subscribe(() => {
          this.notifySuccess('::DeleteSuccessfully');
          this.refresh();
        })
      })
  }

  refresh() {
    this.teacherManagement.reload();
  }

  keyPressFilter(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.refresh();
    }
  }

}
