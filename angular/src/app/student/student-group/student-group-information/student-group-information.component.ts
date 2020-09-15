import { Component, OnInit, Injector, ViewChild, Input } from '@angular/core';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { StudentGroupInformationService } from 'src/app/shared/services/student/student-group-information/service';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
import { DataTablesOptions, FtDatatablesComponent } from 'src/app/shared/components/ft-table/ft-datatable.component';
import { StudentGroupInformationPermission } from 'src/app/shared/services/student/student-permission-name';
import { GetStudentGroupInformationInputDto, GetStudentGroupInformationDto } from 'src/app/shared/services/student/student-group-information/models';

@Component({
  selector: 'student-group-information',
  templateUrl: './student-group-information.component.html',
  animations: [appModuleAnimation()]
})

export class StudentGroupInformationComponent extends AppBaseComponent implements OnInit {

  get id(): string {
    return this.getParamId('id');
  }

  public dtOptions: DataTablesOptions;
  public filter: string;
  public readonly creatingPermission: string = StudentGroupInformationPermission.Create;

  @ViewChild('studentGroupInformation', { static: false }) public studentGroupInformation: FtDatatablesComponent;
  @Input('studentGroupId') public studentGroupId: string;
  constructor(injector: Injector,
    private readonly _groupInformationService: StudentGroupInformationService) {
    super(injector);
  }

  ngOnInit(): void {
    this.dtOptions = {
      scrollX: true,
      responsive: false,
      paging: true,
      serverSide: true,
      processing: false,
      ajaxFunction: (sorting, skipCount, maxResutlCount, callBacks) => {
        const inputFilter = new GetStudentGroupInformationInputDto();
        inputFilter.filter = this.filter;
        inputFilter.maxResultCount = maxResutlCount;
        inputFilter.skipCount = skipCount;
        inputFilter.sorting = sorting;
        inputFilter.studentGroupId = this.id;
        this._groupInformationService.getListByPaged(inputFilter).subscribe(result => {
          callBacks({
            data: result.items,
            recordsFiltered: result.totalCount,
            recordsTotal: result.totalCount
          })
        }, () => this.clearBusy(), () => this.clearBusy())
      },
      columns: [
        {
          title: this.l('::Actions'),
          width: '150px',
          data: 'id',
          orderable: false,
          visible: this.getGrantedPolicy(StudentGroupInformationPermission.Update) ||
            (this.getGrantedPolicy(StudentGroupInformationPermission.Delete)),
          render: (data, type, row) => {
            return this.renderButtonEditAndDelete(this.getGrantedPolicy(StudentGroupInformationPermission.Update),
              this.getGrantedPolicy(StudentGroupInformationPermission.Delete))
          }
        },
        {
          title: this.l('::StudentName'),
          data: 'studentName'
        },
        {
          title: this.l('::Position'),
          data: 'position',
        },
        {
          title: this.l('::Role'),
          data: 'roles',
        },
        {
          title: this.l('::Description'),
          data: 'description',
        }
      ],
      rowCallback: (row: Node, data: GetStudentGroupInformationDto, index: number) => {
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

  create() {
    this.redirect(`student/group-student/information/create/${this.id}`);
  }

  edit(idInfor: string) {
    this.redirect(`student/group-student/information/edit/${this.id}/${idInfor}`);

  }

  goBack() {
    this.redirect(`student/group-student/edit/${this.id}`);
  }

  delete(input: GetStudentGroupInformationDto) {
    this.confirmationPopup(this.l('::WillBeDelete') + ' ' + input.studentName,
      this.l('::AreYouSure'), () => {
        this._groupInformationService.delete(input.id).subscribe(() => {
          this.notifySuccess('::DeleteSuccessfully');
          this.refresh();
        })
      }
    )
  }

  refresh() {
    this.studentGroupInformation.reload();
  }

  keyPressFilter(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.refresh();
    }
  }

}
