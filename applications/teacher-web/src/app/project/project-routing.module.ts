import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectComponent } from './project.component';
import { ViewProjectComponent } from './view/view-project.component';
import { ViewProjectInformationComponent } from './project-information/view/view-project-information.component';

const routes = [
  {
    path: 'list',
    children: [
      {
        path: '',
        component: ProjectComponent,
      },
      {
        path: 'edit/:id',
        component: ViewProjectComponent,
      },
      {
        path: 'information/edit/:projectId/:id',
        component: ViewProjectInformationComponent,
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ProjectRoutingModule {

}
