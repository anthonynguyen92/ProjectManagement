import { AppBaseComponent } from './../../shared/app.base.component';
import { Component, OnInit, Injector } from "@angular/core";
import { appModuleAnimation } from "../../shared/animations/routerTransition";

@Component({
    templateUrl: './create-edit-student.component.html',
    animations: [appModuleAnimation()],
})
export class CreatOrEditStudentComponent extends AppBaseComponent implements OnInit {

    constructor(protected readonly injector: Injector) {
        super(injector);
    }

    ngOnInit(): void {
    
    }


}