import { AppBaseComponent } from './../shared/app.base.component';
import { appModuleAnimation } from '../shared/animations/routerTransition';
import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { DataTablesOptions, FtDatatablesComponent } from '../shared/components/ft-table/ft-datatable.component';
import { StudentPermission } from '../shared/services/student/student-permission-name';
import { GetStudentInputDto, GetStudentDto } from '../shared/services/student/models';
import { isPlainObject } from 'jquery';
import { StudentService } from '../shared/services/student/services';

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
                    title: this.l('::Actions'),
                    width: '150px',
                    data: 'id',
                    orderable: false,
                    visible: this.getGrantedPolicy(StudentPermission.Update) || this.getGrantedPolicy(StudentPermission.Delete),
                    render: (data, type, row) => {
                        return this.renderButtonEditAndDelete(this.getGrantedPolicy(StudentPermission.Update), this.getGrantedPolicy(StudentPermission.Delete))
                    }
                },
                {
                    title: this.l('::name'),
                    data: 'name',
                }
            ],
            rowCallback: (row: Node, data: GetStudentDto, index: number) => {
                if (data) {
                    $('btn-edit', row).unbind('click');
                    $('btn-edit', row).bind('click', () => {
                        this.edit(data.id);
                    })
                }
            }
        }
    }


    edit(id: string) {
        this.redirect('student');
    }

    create() {
        this.redirect('student');
    }

    delete(input: GetStudentDto) {
        this.confirmationPopup(this.l('::WillBeDelete') + ' ' + input.name,
            this.l('::AreYouSure'), () => {
                this._studentService.deleteById(input.id).subscribe(() => {
                    this.notifySuccess('::DeleteSuccessfully');
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