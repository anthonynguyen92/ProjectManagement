import { FtApplicationLayoutComponent } from './layout/application-layout/application-layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarNavComponent } from './layout/sidebar-nav/sidebar-nav.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarFooterComponent } from './layout/sidebar-footer/sidebar-footer.component';
import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ThemeBasicModule, ApplicationLayoutComponent } from '@abp/ng.theme.basic';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';

@NgModule({
  declarations: [
    FtApplicationLayoutComponent,
    FooterComponent,
    NavbarComponent,
    SidebarFooterComponent,
    SidebarNavComponent,
  ],
  imports: [
    CoreModule,
    ThemeSharedModule,
    ThemeBasicModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
  ],
  exports: [
    CoreModule,
    ThemeSharedModule,
    ThemeBasicModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
  ],
  providers: []
})
export class SharedModule { }
