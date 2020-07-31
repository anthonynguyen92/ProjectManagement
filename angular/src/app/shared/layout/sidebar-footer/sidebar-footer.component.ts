import { AppBaseComponent } from '../../app.base.component';
import { Component, OnInit, Injector, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sidebar-footer',
  templateUrl: './sidebar-footer.component.html',
  encapsulation: ViewEncapsulation.None
})

export class SideBarFooterComponent {

  versionText: string;
  currentYear: number;

  constructor(
    injector: Injector
  ) {
    //super(injector);

    this.currentYear = new Date().getFullYear();
    this.versionText = '123'; //this.appSession.application.version + ' [' + this.appSession.application.releaseDate.format('YYYYDDMM') + ']';
  }
}




