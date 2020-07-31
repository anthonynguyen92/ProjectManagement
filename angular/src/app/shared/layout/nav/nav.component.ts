import { AppBaseComponent } from '../../app.base.component';
import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'app-doan-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent extends AppBaseComponent implements OnInit {

  userloginName: string;

  constructor(protected readonly injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.userloginName = this.config.getDeep('currentUser.userName');
  }

}
