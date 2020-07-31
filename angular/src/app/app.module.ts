import { SharedModule } from './shared/shared.module';
import { CoreModule } from '@abp/ng.core';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';

const LOGGED = [NgxsLoggerPluginModule.forRoot({ disabled: true })]
@NgModule({
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      CoreModule.forRoot({
         environment,
         sendNullsAsQueryParam: false,
         skipGetAppConfiguration: false,
      }),

      ThemeSharedModule.forRoot(),
      ThemeBasicModule.forRoot(),
      NgxsModule.forRoot(),
      SharedModule,
      ...(environment.production ? [] : LOGGED)
   ],
   declarations: [
      AppComponent,
      AccountComponent],
   bootstrap: [AppComponent],
})
export class AppModule { }
