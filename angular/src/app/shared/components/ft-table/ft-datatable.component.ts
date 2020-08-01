import { Component, Input, ViewChild, AfterViewInit, OnDestroy, OnInit, AfterContentInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

declare var ftapp;

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'ft-datatables',
    templateUrl: './ft-datatable.component.html',
    styleUrls: ['./ft-datatable.component.scss']
})

export class FtDatatablesComponent implements AfterViewInit, OnDestroy {

    @ViewChild(DataTableDirective, {static: false})
    private datatableElement: DataTableDirective;
    dtTrigger: Subject<any> = new Subject();
    @Input() dtOptions: DataTablesOptions;
    constructor() {

    }

    ngAfterViewInit(): void {
        this.dtTrigger.next();
        this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
            dtInstance.on('processing.dt', (e, settings, processing) => {
                if (processing) {
                    ftapp.setBusy();
                }
                else {
                    ftapp.clearBusy();
                }
            })
        });
    }
    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }
    reload() {
        this.datatableElement.dtInstance.then((dtinstance: DataTables.Api) => {
            dtinstance.ajax.reload();
        });
    }
    rerender(): void {
        this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
           // dtInstance.clear();
            // Destroy the table first
            dtInstance.destroy();
            // Call the dtTrigger to rerender again
            this.dtTrigger.next();
        });
      }
}

export interface DataTablesOptions extends DataTables.Settings {
    ajaxFunction?: (
        sorting: string,
        skipCount: number,
        maxResultCount: number,
        callbackFunction: (ajaxData: DataTables.AjaxData) => void,
    ) => void
}
