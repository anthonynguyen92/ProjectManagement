import { Component, Injector, Input, OnInit } from '@angular/core';
import { appModuleAnimation } from 'src/app/shared/animations/routerTransition';
import { AppBaseComponent } from 'src/app/shared/app.base.component';

@Component({
  selector: 'ft-project-information',
  templateUrl: './project-information.component.html',
  animations: [appModuleAnimation()]
})

export class ProjectInformationComponent extends AppBaseComponent implements OnInit {

  @Input() public projectId: string;
  get id():string{
    return this.getParamId('id');
  }

  constructor(injector: Injector) {
    super(injector)
  }

  ngOnInit() { }

  create() {
    this.redirect(`project/list/information/create/${this.id}`);
  }

  edit(idInfor: string) {
    this.redirect(`project/list/information/edit/${this.id}/${idInfor}`);

  }

  goBack() {
    this.redirect(`project/lit/edit/${this.id}`);
  }
}
