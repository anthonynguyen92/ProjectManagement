import { AppBaseComponent } from './../shared/app.base.component';
import { Component, Injector, AfterViewInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent extends AppBaseComponent implements AfterViewInit {
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  constructor(protected readonly injector: Injector,
    private oAuthService: OAuthService) {
    super(injector);
  }

  ngAfterViewInit(): void {

  }
}
