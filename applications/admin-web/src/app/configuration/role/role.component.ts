import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { IdentityService, Identity } from '@abp/ng.identity';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { DataTablesOptions, FtDatatablesComponent } from 'src/app/shared/components/ft-table/ft-datatable.component';

@Component({
    templateUrl: './role.component.html',
    animations: [appModuleAnimation()]
})
export class RoleComponent extends AppBaseComponent implements OnInit {

    public dtOptions: DataTablesOptions;

    @ViewChild('roleManagement', { static: false }) public roleManagement: FtDatatablesComponent;

    public filter: string;

    constructor(protected readonly injector: Injector,
        private readonly _rolesService: IdentityService
    ) {
        super(injector);

        this.title = 'List';

        this.router.events.pipe(
            filter((e) => e instanceof NavigationEnd)
        ).subscribe((e: NavigationEnd) => {
            if (this.dtOptions) {
                this.refresh();
            }
        });

    }
    ngOnInit(): void {
        this.dtOptions = {
            scrollX: true,
            responsive: false,
            paging: true,
            serverSide: true,
            processing: false,
            ajaxFunction: (sorting, skipCount, maxResultCount, callBack) => {
                const inputFilter = {
                    filter: this.filter,
                    skipCount: skipCount,
                    sorting: sorting,
                    maxResultCount: maxResultCount
                }
                this._rolesService.getRoles(inputFilter).subscribe(result => {
                    callBack({
                        data: result.items,
                        recordsTotal: result.totalCount,
                        recordsFiltered: result.totalCount
                    });
                }, () => this.clearBusy(), () => this.clearBusy());
            },
            columns: [
                {
                    title: this.l('::Actions'),
                    width: '150px',
                    data: 'id',
                    orderable: false,
                    render: (data, type, row) => {
                        let html = '<button class="btn btn-sm btn-default waves-effect btn-edit" title="' + this.l('Edit') + '"><i class="material-icons">edit</i></button>';
                        html += '<button class="btn btn-sm btn-danger waves-effect btn-delete" title="' + this.l('Delete') + '"><i class="material-icons">delete</i></button>';

                        return html;
                    }
                },
                {
                    title: this.l('::Name'),
                    data: 'name'
                },
                {
                    title: this.l('::Default'),
                    data: 'isDefault',
                    render: (status) => {
                        return this.renderStatusToggle(status, true);
                    }
                },
                {
                    title: this.l('::Public'),
                    data: 'isPublic',
                    render: (status) => {
                        return this.renderStatusToggle(status, true);
                    }
                }
            ],
            rowCallback: (row: Node, data: Identity.RoleItem, index: number) => {
                if (data) {
                    $('.btn-edit', row).unbind('click');
                    $('.btn-edit', row).bind('click', () => {
                        this.edit(data.id);
                    });

                    $('.btn-delete', row).unbind('click');
                    $('.btn-delete', row).bind('click', () => {
                        this.delete(data);
                    })
                }
            }
        }
    }

    create() {
        this.redirect('setting/role/create');
    }

    edit(id: string) {
        this.redirect('setting/role/edit/' + id);
    }

    delete(input: Identity.RoleItem) {
        this.confirmationPopup(this.l('::WillBeDeleted') + ' ' + input.name,
            this.l('::AreYouSure'), () => {
                this._rolesService.deleteRole(input.id).subscribe(() => {
                    this.notifySuccess(this.l('::DeleteSuccessfully'));
                    this.refresh();
                })
            })
    }

    refresh() {
        this.roleManagement.reload();
    }

    keyPressFilter(event: KeyboardEvent) {
        if (event.keyCode === 13) {
            this.refresh();
        }
    }
}
