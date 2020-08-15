import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { AppBaseComponent } from '../../shared/app.base.component';
import { DataTablesOptions, FtDatatablesComponent } from '../../shared/components/ft-table/ft-datatable.component';
import { SystemSettingService } from '../../shared/services/system-configuration/system-setting/service';
import { GetSystemSettingInput, SystemSettingDto, GetSystemSettingDto } from '../../shared/services/system-configuration/system-setting/models';
import { appModuleAnimation } from '../../shared/animations/routerTransition';
import * as moment from 'moment';
import { SystemSettingPermission } from 'src/app/shared/services/system-configuration/system-permission-name';

@Component({
    templateUrl: './system-setting.component.html',
    animations: [appModuleAnimation()]
})
export class SystemSettingComponent extends AppBaseComponent implements OnInit {

    public dtOptions: DataTablesOptions;
    @ViewChild('systemSetting', { static: false }) SystemSetting: FtDatatablesComponent;
    public creatingPermission: string = SystemSettingPermission.Create;
    public filter: string;

    constructor(protected readonly injector: Injector,
        private readonly _systemsttingService: SystemSettingService) {
        super(injector);
        this.title = 'List';
    }

    ngOnInit(): void {
        this.dtOptions = {
            scrollX: true,
            responsive: false,
            paging: true,
            serverSide: true,
            processing: false,
            ajaxFunction: (sorting, skipCount, maxResultCount, callBack) => {
                const inputFilter = new GetSystemSettingInput();
                inputFilter.filter = this.filter;
                inputFilter.skipCount = skipCount;
                inputFilter.sorting = sorting;
                inputFilter.maxResultCount = maxResultCount;

                this._systemsttingService.getListPagedByInput(inputFilter).subscribe(result => {
                    callBack({
                        data: result.items,
                        recordsTotal: result.totalCount,
                        recordsFiltered: result.totalCount
                    })
                }, () => this.clearBusy(), () => this.clearBusy())
            },
            columns: [
                {
                    title: this.l('::Actions'),
                    width: '150px',
                    data: 'id',
                    orderable: false,
                    visible: this.getGrantedPolicy(SystemSettingPermission.Delete) || this.getGrantedPolicy(SystemSettingPermission.Update),
                    render: (data, type, row) => {
                        return this.renderButtonEditAndDelete(this.getGrantedPolicy(SystemSettingPermission.Delete), this.getGrantedPolicy(SystemSettingPermission.Update));
                    }
                },
                {
                    title: this.l('SystemConfiguration::Key'),
                    data: 'key'
                },
                {
                    title: this.l('SystemConfiguration::Value'),
                    data: 'value'
                },
                {
                    title: this.l('SystemConfiguration::Description'),
                    data: 'description'
                },
                {
                    title: this.l('SystemConfiguration::EffectDate'),
                    data: 'effectDate',
                    render: (data) => {
                        if (data) {
                            return moment(data).format('DD-MM-YYYY');
                        }
                        else {
                            return '';
                        }
                    }
                },
                {
                    title: this.l('SystemConfiguration::ExpireDate'),
                    data: 'expireDate',
                    render: (data) => {
                        if (data) {
                            return moment(data).format('DD-MM-YYYY');
                        }
                        else {
                            return '';
                        }
                    }
                },
                {
                    title: this.l('SystemConfiguration::Status'),
                    data: 'status',
                    render: (status) => {
                        return this.renderStatusToggle(status, !this.getGrantedPolicy(SystemSettingPermission.Update));
                    }
                },
                {
                    title: this.l('SystemConfiguration::IsEncrypt'),
                    data: 'isEncript',
                    render: (isencrypt) => {
                        return this.renderStatusToggle(isencrypt, true, '-enscrypt');
                    }
                }

            ],
            rowCallback: (row: Node, data: SystemSettingDto, index: number) => {
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
                    })
                }
            }
        }
    }

    create() {
        this.redirect('setting/system-setting/create');
    }

    edit(id: string) {
        this.redirect('setting/system-setting/edit/' + id);
    }

    delete(input: GetSystemSettingDto) {
        this.confirmationPopup(this.l('::WillBeDeleted') + ' ' + input.key,
            this.l('::AreYouSure'), () => {
                this._systemsttingService.deleteById(input.id).subscribe(() => {
                    this.notifySuccess(this.l('::DeleteSuccessfully'));
                    this.refresh();
                })
            })
    }

    toggleStatus(id: string){
        this._systemsttingService.toggleStatus(id).subscribe(()=>{
            this.notifySuccess(this.l("SystemConfiguration::ChangeStatusSuccessfully"));
        });
    }

    refresh() {
        this.SystemSetting.reload();
    }

    keyPressFilter(event: KeyboardEvent) {
        if (event.keyCode === 13) {
            this.refresh();
        }
    }
}
