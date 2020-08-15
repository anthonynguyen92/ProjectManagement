import { Component, OnInit, AfterViewInit, Injector } from '@angular/core';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { IdentityService, Identity } from '@abp/ng.identity';
import { PermissionManagementService, PermissionManagement } from '@abp/ng.permission-management'
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface IPermission extends PermissionManagement.Permission {
  groupName: string;
  level: number;
  permissions: IPermission[]
}

@Component({
  templateUrl: './create-edit-role.component.html',
  animations: [appModuleAnimation()],
  styles: [
    `.mat-tree-invisible {
        display: none;
      }
      .mat-tree ul,
      .mat-tree li {
        margin-top: 0;
        margin-bottom: 0;
        list-style-type: none;
      }
      .mat-tree .mat-checkbox {
          padding-top:9px;
      }
    `
  ]
})
export class CreateOrEditRoleComponent extends AppBaseComponent implements OnInit, AfterViewInit {


  get id(): string {
    return this.getParamId('id');
  }
  public vm: any = {};

  treeControl = new NestedTreeControl<IPermission>(node => node.permissions);
  dataSource = new MatTreeNestedDataSource<IPermission>();
  hasChild = (_: number, node: IPermission) => !!node.permissions && node.permissions.length > 0;

  constructor(protected readonly injector: Injector,
    private readonly _rolesService: IdentityService,
    private readonly _permissionService: PermissionManagementService) {
    super(injector);
  }

  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
    this.title = 'InformationRoles';
    this._rolesService.getRoleById(this.id).subscribe((data) => {
      if (data) {
        this.vm = data;
        this._permissionService.getPermissions({
          providerKey: this.vm.name,
          providerName: 'R'
        }).subscribe(result => {
          this.dataSource.data = this.buildPermissionGroupToTreeItem(result.groups);
        });
      }
    })
  }

  buildPermissionGroupToTreeItem(groups: PermissionManagement.Group[]): IPermission[] {
    return groups.map<IPermission>(x => {
      return {
        displayName: x.displayName,
        groupName: x.name,
        parentName: null,
        allowedProviders: [],
        grantedProviders: [],
        name: x.name,
        isGranted: null,
        permissions: this.buidPermissionToTreeItem(x.permissions, null, 1),
        level: 0
      };
    });
  }

  buidPermissionToTreeItem(permissions: PermissionManagement.Permission[], parentName: string, level: number): IPermission[] {
    const idx = permissions.findIndex(x => x.parentName === parentName);
    if (idx < 0) return [];

    return permissions.filter(x => x.parentName === parentName).map<IPermission>(x => {
      return {
        displayName: x.displayName,
        groupName: x.name,
        parentName: x.parentName,
        allowedProviders: x.allowedProviders,
        grantedProviders: x.grantedProviders,
        name: x.name,
        isGranted: x.isGranted,
        permissions: this.buidPermissionToTreeItem(permissions, x.name, level + 1),
        level
      };
    });
  }

  getChecked(permission: IPermission): boolean {
    if (permission.level !== 0) return permission.isGranted;

    return this.getNodeChecked(permission);
  }

  private getNodeChecked(permission: IPermission): boolean {
    const anyNotGrand = permission.permissions.findIndex(x => !x.isGranted) > -1;

    if (anyNotGrand) return false;

    if (permission.permissions) {
      for (let index = 0; index < permission.permissions.length; index++) {
        const element = permission.permissions[index];
        const result = this.getNodeChecked(element);
        if (result === false) return false;
      }
    }
    return true;
  }

  private isAnyNodeNotGrand(permission: IPermission): boolean {
    const anyNotGrand = permission.permissions.findIndex(x => !x.isGranted) > -1;

    if (anyNotGrand) return true;

    if (permission.permissions) {
      for (let index = 0; index < permission.permissions.length; index++) {
        const element = permission.permissions[index];
        const result = this.isAnyNodeNotGrand(element);
        if (result === true) return true;
      }
    }
    return false;
  }

  private isAnyNodeGrand(permission: IPermission): boolean {
    const anyGrand = permission.permissions.findIndex(x => x.isGranted) > -1;

    if (anyGrand) return true;

    if (permission.permissions) {
      for (let index = 0; index < permission.permissions.length; index++) {
        const element = permission.permissions[index];
        const result = this.isAnyNodeGrand(element);
        if (result === true) return true;
      }
    }
    return false;
  }

  getIndeterinate(permission: IPermission): boolean {
    if (permission.level !== 0) return false;

    return this.getNodeIndeterinate(permission);
  }

  private getNodeIndeterinate(permission: IPermission): boolean {
    const anyNotGrand = this.isAnyNodeNotGrand(permission)
    const anyGrand = this.isAnyNodeGrand(permission)

    return anyGrand && anyNotGrand;
  }

  toggle(permission: IPermission) {
    permission.isGranted = !permission.isGranted;
    if (permission.level === 0) {
      this.selectionNodeToggle(permission);
    }
    else {
      if (!permission.isGranted) {
        this.selectionNodeToggle(permission);
      }
    }
  }

  private selectionNodeToggle(permission: IPermission) {
    if (permission.permissions) {
      permission.permissions.forEach(item => {
        item.isGranted = permission.isGranted
        this.selectionNodeToggle(item);
      })
    }
  }

  getPermissionToParamUpdate(permissions: IPermission[]): PermissionManagement.MinimumPermission[] {
    let result: PermissionManagement.MinimumPermission[] = [];

    permissions.forEach(item => {
      if (item.level > 0) {
        result.push({
          isGranted: item.isGranted,
          name: item.name
        });
      }

      if (item.permissions) {
        const values = this.getPermissionToParamUpdate(item.permissions);
        if (values)
          result = result.concat(...values);
      }
    });

    return result;
  }

  goBack() {
    this.redirect('setting/role');
  }

  save() {
    if (this.vm) {
      this.setBusy();
      if (this.vm.id) {
        this._rolesService.updateRole(this.vm).subscribe(item => {
          this._permissionService.updatePermissions({
            permissions: this.getPermissionToParamUpdate(this.dataSource.data),
            providerKey: this.vm.name,
            providerName: 'R'
          }).subscribe(() => {

            this.notifySuccess(this.l('::UpdateSuccessfully'));
            this.goBack();
          }, () => {
            this.clearBusy();
          }, () => {
            this.clearBusy();
          });
        }, () => {
          this.clearBusy();
        });
      }
      else {
        this._rolesService.createRole(this.vm).subscribe((item) => {
          this.notifySuccess(this.l('::CreateSuccessfully'));
          this.goBack();
        }, () => { this.clearBusy() }, () => {
          this.clearBusy();
        });
      }
    }
  }
}
