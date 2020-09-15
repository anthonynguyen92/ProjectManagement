import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { CoreModule } from '@abp/ng.core';
import { FtApplicationLayoutComponent } from './layout/ft-application-layout/ft-application-layout.component';
import { FtAccountLayoutComponent } from './layout/ft-account-layout/ft-account-layout.component';
import { FtEmptyLayoutComponent } from './layout/ft-empty-layout/ft-empty-layout.component';
// import { FtHeaderComponent } from './layout/ft-header/ft-header.component';
import { FtNavComponent } from './layout/ft-nav/ft-nav.component';
import { FtDatatablesComponent } from './components/ft-table/ft-datatable.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DataTablesModule } from 'angular-datatables';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { RightSideBarComponent } from './layout/right-sidebar.component';
import { SideBarFooterComponent } from './layout/sidebar-footer.component';
import { SideBarNavComponent } from './layout/sidebar-nav.component';
import { SideBarUserAreaComponent } from './layout/sidebar-user-area.component';
import { TopBarLanguageSwitchComponent } from './layout/topbar-languageswitch.component';
import { TopBarComponent } from './layout/topbar.component';
import { LocalizePipe } from './pipes/localize.pipe';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatTreeModule } from '@angular/material/tree';
import { MatNativeDateModule, MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DatepickerComponent } from './components/ft-datepicker/ft-datepicker.component';
import { ChangePasswordDialog } from './layout/change-password-dialog.component';
import { RichTextEditorComponent } from './components/ft-richtexbox/ft.richtextbox.component';
import { QuillModule } from 'ngx-quill';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FileInputValueAccessor } from './directives/file-input.accessor';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatErrorComponent } from './directives/mat-error-component';
import { MongoIndexLimitDirective } from './directives/mongo.directive';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DataTablesModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatDividerModule,
    MatListModule,
    QuillModule.forRoot(),
    MatProgressBarModule
  ],
  declarations: [
    FileInputValueAccessor,
    FtApplicationLayoutComponent,
    FtAccountLayoutComponent,
    FtEmptyLayoutComponent,
    // FtHeaderComponent,
    FtNavComponent,
    FtDatatablesComponent,
    RightSideBarComponent,
    SideBarFooterComponent,
    SideBarNavComponent,
    SideBarUserAreaComponent,
    TopBarLanguageSwitchComponent,
    TopBarComponent,
    LocalizePipe,
    ChangePasswordDialog,
    DatepickerComponent,
    RichTextEditorComponent,
    MatErrorComponent,
    MongoIndexLimitDirective
  ],
  exports: [
    CommonModule,
    CoreModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DataTablesModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatDividerModule,
    MatListModule,
    FileInputValueAccessor,
    FtApplicationLayoutComponent,
    FtAccountLayoutComponent,
    FtEmptyLayoutComponent,
    // FtHeaderComponent,
    FtNavComponent,
    FtDatatablesComponent,
    DatepickerComponent,
    RichTextEditorComponent,
    QuillModule,
    MatErrorComponent,
    MongoIndexLimitDirective,
    MatProgressBarModule
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: ['DD/MM/YYYY'],
        },
        display: {
          dateInput: 'DD/MM/YYYY',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'DD/MM/YYYY',
          monthYearA11yLabel: 'MMMM YYYY',
        },
      },
    },
  ],
  entryComponents: [
  ]
})
export class SharedModule { }
