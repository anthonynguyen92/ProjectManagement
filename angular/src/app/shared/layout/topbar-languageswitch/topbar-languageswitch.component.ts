import { AppBaseComponent } from './../../app.base.component';
import { Component, OnInit, Injector, ViewEncapsulation } from '@angular/core';
import { SessionState, SetLanguage, ApplicationConfiguration } from '@abp/ng.core';
declare var $;

@Component({
  selector: 'topbar-languageswitch',
  templateUrl: './topbar-languageswitch.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TopbarLanguageswitchComponent extends AppBaseComponent implements OnInit {

  languages: ApplicationConfiguration.Language[] = [];
  currentLanguage: ApplicationConfiguration.Language;

  constructor(protected readonly injector: Injector) {
    super(injector);
  }

  ngOnInit() {
    this.languages = this.config.getDeep('localization.languages');
    this.currentLanguage = this.languages.find(x => x.cultureName === this.selectedLangCulture);
  }

  get selectedLangCulture(): string {
    return this.store.selectSnapshot(SessionState.getLanguage);
  }

  onChangeLang(cultureName: string) {
    this.store.dispatch(new SetLanguage(cultureName));
    $.fn.dataTable.defaults.language.url = './assets/datatables/translations/' + cultureName + '.json';
  }
}
