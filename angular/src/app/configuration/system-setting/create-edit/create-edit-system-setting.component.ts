import { Component, OnInit, AfterViewInit, Injector } from '@angular/core';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
import { AppBaseComponent } from 'src/app/shared/app.base.component';
import { CreateUpdateSystemSettingDto } from 'src/app/shared/services/system-configuration/system-setting/models';
import { SystemSettingService } from 'src/app/shared/services/system-configuration/system-setting/service';


@Component({
  templateUrl: './create-edit-system-setting.component.html',
  animations: [appModuleAnimation()]
})
export class CreateOrEditSystemSettingComponent extends AppBaseComponent implements OnInit, AfterViewInit {

  get id(): string {
    return this.getParamId('id');
  }

  public vm: CreateUpdateSystemSettingDto = new CreateUpdateSystemSettingDto();

  constructor(protected readonly injector: Injector,
    private readonly _systemSettingService: SystemSettingService) {
    super(injector);
  }

  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
    this.title = 'SystemSettingInformation';
    if (this.id) {
      this._systemSettingService.getById(this.id).subscribe((data) => {
        if (data) {
          this.vm = data;
          this.vm.isEncript = false;
        }
      })
    }
  }

  goBack() {
    this.redirect('configuration/system-setting');
  }

  save() {
    if (this.vm) {
      this.setBusy();
      this.vm.status = this.vm.status ? 1 : 0;
      this._systemSettingService.saveByInput(this.vm).subscribe(() => {
        if (this.vm.id) {
          this.notifySuccess(this.l('::UpdateSuccessfully'));
        } else {
          this.notifySuccess(this.l('::CreateSuccessfully'));
        }
        this.goBack();
      }, () => { this.clearBusy() }, () => {
        this.clearBusy();
      });
    }
  }
}