import { Component, AfterViewInit, Injector } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { appModuleAnimation } from '../shared/animations/routerTransition';
import { AppBaseComponent } from '../shared/app.base.component';
declare var $: any;
@Component({
    selector: 'app-home',
    animations: [appModuleAnimation()],
    templateUrl: './home.component.html',
})
export class HomeComponent extends AppBaseComponent implements AfterViewInit {
    get hasLoggedIn(): boolean {
        return this.oAuthService.hasValidAccessToken();
    }

    constructor(
        protected readonly injector: Injector,
        private readonly oAuthService: OAuthService) {
        super(injector);
    }

    ngAfterViewInit(): void {

    }
}
