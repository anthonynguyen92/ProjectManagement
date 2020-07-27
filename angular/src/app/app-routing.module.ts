import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, LocalizationService } from '@abp/ng.core';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [,
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy({ redirectUrl: '/' })),
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
