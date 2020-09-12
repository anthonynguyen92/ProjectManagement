import { Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
import { AppBaseComponent } from 'src/app/shared/app.base.component';

@Component({

  templateUrl: './create-update-project-information.component.html',
  animations: [appModuleAnimation()],
})

export class CreateUpdateProjectInformationComponent extends AppBaseComponent implements OnInit {

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() { }
}
