import { AuthGuard } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FtApplicationLayoutComponent } from './shared/layout/ft-application-layout/ft-application-layout.component';

const routes: Routes = [
  {
    component: FtApplicationLayoutComponent,
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'student',
        loadChildren: () => import('./student-group/student-group.module').then(m => m.StudentGroupModule),
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'project',
        loadChildren: () => import('./project/project.module').then(m => m.ProjectModule),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account')
      .then(m => m.AccountModule.forLazy({ redirectUrl: '/' })),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
