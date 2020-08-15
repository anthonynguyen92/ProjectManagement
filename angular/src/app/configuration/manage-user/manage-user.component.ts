import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { DataTablesOptions, FtDatatablesComponent } from 'src/app/shared/components/ft-table/ft-datatable.component';
import { IdentityService, Identity } from '@abp/ng.identity';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
import { ActivatedRoute } from '@angular/router';
import { UserPermission } from 'src/app/shared/services/system-configuration/system-permission-name';
@Component({
  templateUrl: './manage-user.component.html',
  animations: [appModuleAnimation()],
})
export class ManageUserComponent extends AppBaseComponent implements OnInit {
  public dtOptions: DataTablesOptions;
  @ViewChild('userManagement', { static: false }) public userManagement: FtDatatablesComponent;

  public filter: string;
  public readonly creatingPermission: string = UserPermission.Create;

  constructor(protected readonly injector: Injector,
    private readonly _userService: IdentityService,
    private readonly _activeRouted: ActivatedRoute,) {
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
        const inputFilter = {
          filter: this.filter,
          skipCount: skipCount,
          sorting: sorting,
          maxResultCount: maxResultCount
        }
        this._userService.getUsers(inputFilter).subscribe(result => {
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
          visible: (this.getGrantedPolicy(UserPermission.Update) || this.getGrantedPolicy(UserPermission.Delete)),
          render: (data, type, row) => {
            return this.renderButtonEditAndDelete(this.getGrantedPolicy(UserPermission.Update), this.getGrantedPolicy(UserPermission.Delete));
          }
        },
        {
          title: this.l('AbpIdentity::DisplayName:Name'),
          data: 'name',
        },
        {
          title: this.l('AbpIdentity::DisplayName:UserName'),
          data: 'userName'
        },
        {
          title: this.l('AbpIdentity::DisplayName:Surname'),
          data: 'surname'
        },
        {
          title: this.l('AbpIdentity::DisplayName:Email'),
          data: 'email'
        },
        {
          title: this.l('AbpIdentity::DisplayName:PhoneNumber'),
          data: 'phoneNumber'
        },
        {
          title: this.l('::IsLockedOut'),
          data: 'isLockedOut',
          render: (status) => {
            return this.renderStatusToggle(status, true);
          }
        },
      ],
      rowCallback: (row: Node, data: Identity.UserItem, index: number) => {
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
    this.redirect('configuration/manage-user/create');
  }

  edit(id: string) {
    this.redirect('configuration/manage-user/edit/' + id);
  }

  delete(input: Identity.UserItem) {
    this.confirmationPopup(this.l('::WillBeDeleted') + ' ' + input.name,
      this.l('::AreYouSure'), () => {
        this._userService.deleteUser(input.id).subscribe(() => {
          this.notifySuccess(this.l('::DeleteSuccessfully'));
          this.refresh();
        })
      })
  }
  refresh() {
    this.userManagement.reload();
  }

  keyPressFilter(event: KeyboardEvent) {

    if (event.keyCode === 13) {
      this.refresh();
    }
  }
}
