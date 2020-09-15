import { Component, OnInit, Injector } from '@angular/core';
import { AppBaseComponent } from '../../app.base.component';
import { ToasterService } from '@abp/ng.theme.shared';

@Component({
  selector: 'app-ft-nav',
  templateUrl: './ft-nav.component.html',
  styleUrls: ['./ft-nav.component.scss']
})
export class FtNavComponent extends AppBaseComponent implements OnInit {

  userloginName: string;

  constructor(protected readonly injector: Injector,
              protected readonly toaster: ToasterService) {
    super(injector);
   }

  ngOnInit(): void {
    this.userloginName = this.config.getDeep('currentUser.userName');
  }

}
