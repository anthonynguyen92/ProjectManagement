import { Component, Injector, ViewEncapsulation } from '@angular/core';
//import { AppComponentBase } from '@shared/app-component-base';

@Component({
    templateUrl: './sidebar-footer.component.html',
    selector: 'sidebar-footer',
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
