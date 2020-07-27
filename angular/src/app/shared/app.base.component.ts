import { ToasterService, ConfirmationService, Confirmation } from '@abp/ng.theme.shared';
import { LocalizationService, ConfigStateService, ConfigState } from '@abp/ng.core';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';
import { Store } from '@ngxs/store';

declare var app;
export class AppBaseComponent {

    public title: string;
    protected readonly toaster: ToasterService;
    protected readonly confirmationService: ConfirmationService;
    protected readonly localizationService: LocalizationService;
    protected readonly router: Router;
    protected readonly store: Store;
    protected readonly config: ConfigStateService;
    protected readonly activeRoute: ActivatedRoute;
    constructor(protected readonly injector: Injector) {
        this.router = injector.get(Router);
        this.toaster = injector.get(ToasterService);
        this.confirmationService = injector.get(ConfirmationService)
        this.localizationService = injector.get(LocalizationService);
        this.config = injector.get(ConfigStateService);
        this.store = injector.get(Store);
    }

    l(key: string): string {
        return this.store.selectSnapshot(ConfigState.getLocalization(key));
    }

    protected redirect(url: string) {
        this.router.navigate([url]);
    }

    protected getQueryStringParam(param: string): string {
        return this.activeRoute.snapshot.paramMap.get(param);
    }

    protected getParamId(params: string): string {
        const id = this.getQueryStringParam(params);
        if (this.validGuid(id)) return id;
        return null;
    }

    protected validGuid(value: string): boolean {
        if (!value) return false;
        const pattern = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
        return pattern.test(value);
    }

    protected notifySuccess(message: string) {
        this.toaster.success(message);
    }

    protected notifyWarming(message: string) {
        this.toaster.warn(message);
    }

    protected notifyError(messag: string) {
        this.toaster.error(messag);
    }

    protected confirmationPopup(message: string, title: string, excute: () => void) {
        this.confirmationService.warn(message, title).subscribe((status: Confirmation.Status) => {
            if (status === Confirmation.Status.confirm) {
                excute();
            }
        })
    }

    protected setBusy() {
        app.setBussy();
    }

    protected clearBusy() {
        app.clearBusy();
    }

    protected getGrantedPolicy(permission: string): boolean {
        return this.config.getGrantedPolicy(permission);
    }

    protected renderButtonEdit(isGrantedUpdate: boolean) {
        if (isGrantedUpdate) {
            return '<button class="btn btn-sm btn-danger waves-effect btn-delete" title="' + this.l('Delete') + '"><i class="material-icons">delete</i></button>';
        }
        return '';
    }

    protected renderButtonDelete(isGrantedDelete: boolean): string {
        if (isGrantedDelete)
            return '<button class="btn btn-sm btn-danger waves-effect btn-delete" title="' + this.l('Delete') + '"><i class="material-icons">delete</i></button>';
        return '';
    }

    protected renderButtonEditAndDelete(isGrantedUpdate: boolean, isGrantedDelete: boolean): string {
        let html = this.renderButtonEdit(isGrantedUpdate);
        html += this.renderButtonDelete(isGrantedDelete);
        return html;
    }

    // protected renderStatusToggle(isChecked: any, isDisable: boolean, cssClass?: string): string {
    //     const switchId = CommonHelper
    // }
}